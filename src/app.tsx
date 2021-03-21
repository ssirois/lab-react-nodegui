import { Window, hot, View, Button } from '@nodegui/react-nodegui';
import React from 'react';
import { QDragMoveEvent, QMouseEvent, QIcon } from '@nodegui/nodegui';
import nodeguiIcon from '../assets/nodegui.jpg';
import { RNWidget } from '@nodegui/react-nodegui/dist/components/config';

const minSize = { width: 500, height: 520 };
const winIcon = new QIcon(nodeguiIcon);

const App: React.FC = () => {
  const viewRef = React.useRef<RNWidget>();
  React.useEffect(() => {
    viewRef.current?.setAcceptDrops(true);
    console.log('viewRef.acceptDrops: ', viewRef.current?.acceptDrops());
  });

  return (
    <Window
      windowIcon={winIcon}
      windowTitle="Hello"
      minSize={minSize}
    >
      <View style={viewStyle}
        ref={viewRef}
        on={{
          DragEnter: (e) => {
            console.log('DragEnter');
            console.log(e);
            const qEvent = new QDragMoveEvent(e);
            qEvent.accept();
          },
          DragMove: (e) => {
            console.log('DragMove');
            console.log(e);
          },
          DragLeave: (e) => {
            console.log('DragLeave');
            console.log(e);
          },
          Drop: (e) => {
            console.log('Drop');
            console.log(e);
          },
          MouseMove: (e) => {
            const mouseEvent = new QMouseEvent(e);
            console.log('MouseMove: ', JSON.stringify({ x: mouseEvent.x(), y: mouseEvent.y() }, null, 2));
          },
        }}
      >
      </View>
    </Window>
  );
};

const viewStyle = `
  flex: 1;
  font-family: arial;
  background: #0e1a40;
`;

export default hot(App);
