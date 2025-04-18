import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCameraFrontIcon],svg[material-symbols-light-camera-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 19.5v-1h5.242l-1.6-1.6l.708-.708L13.158 19l-2.808 2.808l-.708-.708l1.6-1.6zm8 0v-1h4v1zM6 17V4.616q0-.691.463-1.153T7.616 3h8.769q.69 0 1.153.463T18 4.616V17h-5.417l-2.233-2.233L8.117 17zm1-3.312q1.123-.517 2.472-.833q1.35-.317 2.528-.317t2.528.317t2.472.833V4.615q0-.23-.192-.423T16.384 4H7.616q-.231 0-.424.192T7 4.615zm5-2.727q-1.038 0-1.77-.73T9.5 8.46t.73-1.769t1.77-.73t1.77.73t.73 1.77t-.73 1.769t-1.77.73"></svg:path>`,
})
export class MaterialSymbolsLightCameraFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
