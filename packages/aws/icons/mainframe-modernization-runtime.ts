import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[awsMainframeModernizationRuntimeIcon],svg[aws-mainframe-modernization-runtime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#01A88D" fill-rule="evenodd" d="M28.743,12 L22.343,17 L28.743,22 L39.673,22 L46.072,17 L39.673,12 L28.743,12 Z M25.591,17 L29.432,14 L38.984,14 L42.824,17 L38.984,20 L29.432,20 L25.591,17 Z M8.001,14 L22,14 L22,12 L8.001,12 L8.001,14 Z M3,18 L19,18 L19,16 L3,16 L3,18 Z M12,22 L23,22 L23,20 L12,20 L12,22 Z M22.743,27 L16.343,32 L22.743,37 L33.673,37 L40.073,32 L33.673,27 L22.743,27 Z M19.591,32 L23.432,29 L32.984,29 L36.825,32 L32.984,35 L23.432,35 L19.591,32 Z M9.001,29 L17.001,29 L17.001,27 L9.001,27 L9.001,29 Z M2,33.001 L13,33.001 L13,31 L2,31 L2,33.001 Z M5,37 L17.001,37 L17.001,35 L5,35 L5,37 Z"></svg:path>`,
})
export class AwsMainframeModernizationRuntimeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
