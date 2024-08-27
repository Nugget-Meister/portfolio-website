import React from 'react';
import Button from '@mui/material/Button';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import { TimelineOppositeContent, TimelineContent } from '@mui/lab';
import TimelineDot from '@mui/lab/Timeline';
import PersonIcon from '@mui/icons-material/Person';


const Sidebar = () => {
  return (
  <>
    <Timeline position='alternate'>
      <TimelineItem>
        <TimelineOppositeContent
         sx={{m: 'auto 0'}}
         align="right"
         variant="body2"
         color="text.secondary"
         >
          Keef
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            s
          </TimelineDot>
          
        </TimelineSeparator>
      </TimelineItem>
      
    </Timeline>
  </>
  );
}

export default Sidebar;
