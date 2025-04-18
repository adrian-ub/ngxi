import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineArtificialIntelligenceSparkIcon],svg[streamline-artificial-intelligence-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 6.433v3.97a2.724 2.724 0 1 1-5.439-.229C.994 9.565.636 8.374.636 7.38c0-1.354.665-2.671 1.617-3.19a2.38 2.38 0 0 1 3.902-2.076"></svg:path><svg:path d="M3.511 5.809c-.35-.08-1.141-.6-1.26-1.612m.039 4.549c-.356.281-.64.917-.731 1.427m5.441.23a2.724 2.724 0 1 0 5.439-.229c.567-.609.924-1.8.924-2.794c0-.434-.068-.864-.192-1.266"></svg:path><svg:path d="M11.71 8.746c.356.281.64.917.731 1.427M7.064 4.307c-.35-.062-.35-.565 0-.626a3.18 3.18 0 0 0 2.559-2.45l.021-.097c.076-.347.57-.35.649-.003l.025.113a3.19 3.19 0 0 0 2.566 2.435c.353.061.353.568 0 .63a3.19 3.19 0 0 0-2.566 2.435l-.025.112c-.08.346-.573.344-.649-.003l-.021-.096a3.18 3.18 0 0 0-2.559-2.45"></svg:path></svg:g>`,
})
export class StreamlineArtificialIntelligenceSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
