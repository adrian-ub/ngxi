import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionEaselSharpIcon],svg[ion-easel-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M468 64H278V32h-44v32H44a12 12 0 0 0-12 12v280a12 12 0 0 0 12 12h78.19L89.93 470.46l36.53 9.61L161.74 368H234v64h44v-64h71.84l31 111.7l36.83-8.57L389.05 368H468a12 12 0 0 0 12-12V76a12 12 0 0 0-12-12m-26 266H70V102h372Z"></svg:path><svg:path fill="currentColor" d="M88 120h336v192H88z"></svg:path>`,
})
export class IonEaselSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
