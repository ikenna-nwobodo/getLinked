import "./timeline.css";
import { useEffect, useState } from "react";
import src from "../images/timeline-desktop.png";

const Timeline = () => {
  const [width, setwidth] = useState(window.innerWidth);
  const breakpoint = 1050;

  useEffect(() => {
    const handleWindowResize = () => setwidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return (
    <div className="timeline" id="timeline">
      <h1>Timeline</h1>
      <p className="pre">
        Here is the breakdown of the time we anticipate using for the upcoming
        event.
      </p>
      {width > breakpoint ? (
        <img src={src} alt="" height={900} />
      ) : (
        <div className="event-list">
          <div className="events">
            <div className="event">
              <div className="event-details">
                <p className="ev-t">Hackathon Announcement</p>
                <p className="ev-d">
                  The getlinked tech hackathon 1.0 is formally announced to the
                  general public and teams begin to get ready to register
                </p>
              </div>
            </div>
            <div className="event-date">
              <p className="ev-n">1</p>
              <p className="ev-t">November 18, 2023</p>
            </div>
          </div>
          <div className="events">
            <div className="event">
              <div className="event-details">
                <p className="ev-t">Teams Registration begins</p>
                <p className="ev-d">
                  Interested teams can now show their interest in the getlinked
                  tech hackathon 1.0 2023 by proceeding to register
                </p>
              </div>
            </div>
            <div className="event-date">
              <p className="ev-n">2</p>
              <p className="ev-t">November 18, 2023</p>
            </div>
          </div>
          <div className="events">
            <div className="event">
              <div className="event-details">
                <p className="ev-t">Teams Registration ends</p>
                <p className="ev-d">
                  Interested Participants are no longer Allowed to register
                </p>
              </div>
            </div>
            <div className="event-date">
              <p className="ev-n">3</p>
              <p className="ev-t">November 18, 2023</p>
            </div>
          </div>
          <div className="events">
            <div className="event">
              <div className="event-details">
                <p className="ev-t">
                  Announcement of the accepted teams and ideas
                </p>
                <p className="ev-d">
                  All teams whom idea has been accepted into getlinked tech
                  hackathon 1.0 2023 are formally announced
                </p>
              </div>
            </div>
            <div className="event-date">
              <p className="ev-n">4</p>
              <p className="ev-t">November 18, 2023</p>
            </div>
          </div>
          <div className="events">
            <div className="event">
              <div className="event-details">
                <p className="ev-t">Getlinked Hackathon 1.0 Offically Begins</p>
                <p className="ev-d">
                  Accepted teams can now proceed to build their ground breaking
                  skill driven solutions
                </p>
              </div>
            </div>
            <div className="event-date">
              <p className="ev-n">5</p>
              <p className="ev-t">November 18, 2023</p>
            </div>
          </div>
          <div className="events">
            <div className="event">
              <div className="event-details">
                <p className="ev-t">Demo Day</p>
                <p className="ev-d">
                  Teams get the opportunity to pitch their projects to judges.
                  The winner of the hackathon will also be announced on this day
                </p>
              </div>
            </div>
            <div className="event-date">
              <p className="ev-n">6</p>
              <p className="ev-t">November 18, 2023</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Timeline;
