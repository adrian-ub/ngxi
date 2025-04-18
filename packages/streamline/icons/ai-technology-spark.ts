import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAiTechnologySparkIcon],svg[streamline-ai-technology-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8.406 7.97c-.386.44-.856.8-1.385 1.061v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1.5A4.5 4.5 0 0 1 6.875.9M3.021 13.5h4"></svg:path><svg:path d="M7.395 3.934c-.351-.061-.351-.565 0-.626A3.18 3.18 0 0 0 9.953.858L9.974.76c.076-.347.57-.349.649-.003l.026.113a3.19 3.19 0 0 0 2.565 2.435c.353.062.353.568 0 .63A3.19 3.19 0 0 0 10.65 6.37l-.026.113c-.079.346-.573.344-.649-.003l-.02-.097a3.18 3.18 0 0 0-2.56-2.45Z"></svg:path></svg:g>`,
})
export class StreamlineAiTechnologySparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
