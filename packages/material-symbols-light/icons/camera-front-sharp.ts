import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCameraFrontSharpIcon],svg[material-symbols-light-camera-front-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19.5v-1h5.242l-1.6-1.6l.708-.708L13.158 19l-2.808 2.808l-.708-.708l1.6-1.6zm8 0v-1h4v1zM6 17V3h12v14h-5.417l-2.233-2.233L8.117 17zm1-3.312q1.123-.517 2.472-.833q1.35-.317 2.528-.317t2.528.317t2.472.833V4H7zm5.002-2.727q-1.04 0-1.771-.728T9.5 8.463t.729-1.77t1.769-.731t1.771.728t.731 1.77t-.728 1.77t-1.77.732"></svg:path>`,
})
export class MaterialSymbolsLightCameraFrontSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
