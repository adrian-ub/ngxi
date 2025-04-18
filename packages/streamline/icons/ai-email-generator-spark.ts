import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAiEmailGeneratorSparkIcon],svg[streamline-ai-email-generator-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.076 9.546h-3.5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4.5"></svg:path><svg:path d="m.576 1.806l6 4.24l6-4.24m-5.236 8.84c-.351-.06-.351-.565 0-.626a3.18 3.18 0 0 0 2.558-2.45l.021-.096c.076-.347.57-.35.649-.003l.026.112a3.19 3.19 0 0 0 2.565 2.436c.353.061.353.568 0 .629a3.19 3.19 0 0 0-2.565 2.435l-.026.113c-.079.346-.573.344-.649-.003l-.021-.096a3.18 3.18 0 0 0-2.558-2.45Z"></svg:path></svg:g>`,
})
export class StreamlineAiEmailGeneratorSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
