import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCameraFrontOutlineIcon],svg[material-symbols-light-camera-front-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.35 21.808l-.708-.708l1.6-1.6H6v-1h5.242l-1.6-1.6l.708-.708L13.158 19zM6 17V4.616q0-.691.463-1.153T7.616 3h8.769q.69 0 1.153.463T18 4.616V17h-1v-2.165q-.942-.572-2.34-.934T12 13.538t-2.66.363t-2.34.934V17zm1-3.312q1.123-.517 2.472-.833q1.35-.317 2.528-.317t2.528.317t2.472.833V4.615q0-.23-.192-.423T16.384 4H7.616q-.231 0-.424.192T7 4.615zm7 5.812v-1h4v1zm-1.998-8.538q-1.04 0-1.771-.729T9.5 8.463t.729-1.77t1.769-.731t1.771.728t.731 1.77t-.728 1.77t-1.77.732m-.002-1q.617 0 1.059-.442q.441-.441.441-1.059t-.441-1.058q-.442-.442-1.059-.442t-1.059.442t-.441 1.058t.441 1.06q.442.44 1.059.44m0-1.5"></svg:path>`,
})
export class MaterialSymbolsLightCameraFrontOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
