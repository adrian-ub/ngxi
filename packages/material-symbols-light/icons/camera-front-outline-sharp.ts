import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCameraFrontOutlineSharpIcon],svg[material-symbols-light-camera-front-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19.5v-1h5.242l-1.6-1.6l.708-.708L13.158 19l-2.808 2.808l-.708-.708l1.6-1.6zM6 17V3h12v14h-1v-2.165q-.942-.572-2.34-.934T12 13.538t-2.66.363t-2.34.934V17zm1-3.312q1.123-.517 2.472-.833q1.35-.317 2.528-.317t2.528.317t2.472.833V4H7zm7 5.812v-1h4v1zm-1.998-8.538q-1.04 0-1.771-.729T9.5 8.463t.729-1.77t1.769-.731t1.771.728t.731 1.77t-.728 1.77t-1.77.732m-.002-1q.617 0 1.059-.442q.441-.441.441-1.059t-.441-1.058q-.442-.442-1.059-.442t-1.059.442t-.441 1.058t.441 1.06q.442.44 1.059.44m0-1.5"></svg:path>`,
})
export class MaterialSymbolsLightCameraFrontOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
