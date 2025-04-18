import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsMainframeModernizationConverterIcon],svg[aws-mainframe-modernization-converter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#01A88D" fill-rule="evenodd" d="M22.997,13 L26.997,13 L26.997,9 L22.997,9 L22.997,13 Z M24.997,35 C23.894,35 22.997,35.897 22.997,37 C22.997,38.103 23.894,39 24.997,39 C26.099,39 26.997,38.103 26.997,37 C26.997,35.897 26.099,35 24.997,35 L24.997,35 Z M25.997,15 L25.997,33.142 C27.717,33.589 28.997,35.142 28.997,37 C28.997,39.206 27.203,41 24.997,41 C22.791,41 20.997,39.206 20.997,37 C20.997,35.142 22.276,33.589 23.997,33.142 L23.997,15 L20.997,15 L20.997,7 L28.997,7 L28.997,15 L25.997,15 Z M20.997,20 L20.997,18 L14.16,18 L5.198,11 L14.16,4 L33.952,4 L42.914,11 L33.952,18 L27.997,18 L27.997,20 L34.641,20 L46.162,11 L34.641,2 L13.471,2 L1.95,11 L13.471,20 L20.997,20 Z M34.641,28 L46.162,37 L34.641,46 L13.471,46 L1.95,37 L13.471,28 L20.997,28 L20.997,30 L14.16,30 L5.198,37 L14.16,44 L33.952,44 L42.914,37 L33.952,30 L27.997,30 L27.997,28 L34.641,28 Z"></svg:path>`,
})
export class AwsMainframeModernizationConverterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
