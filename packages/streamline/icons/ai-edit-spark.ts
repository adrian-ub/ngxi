import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAiEditSparkIcon],svg[streamline-ai-edit-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.926 13.202l-3 .26l.26-3l6.24-6.2a1 1 0 0 1 1.43 0l1.27 1.28a1 1 0 0 1 0 1.42zM.842 3.972c-.351-.061-.351-.565 0-.626A3.18 3.18 0 0 0 3.4.896l.021-.097c.076-.346.57-.349.65-.002l.025.112A3.19 3.19 0 0 0 6.66 3.345c.353.06.353.567 0 .629a3.19 3.19 0 0 0-2.565 2.435l-.026.113c-.079.346-.573.344-.649-.003l-.02-.097a3.18 3.18 0 0 0-2.56-2.45Z"></svg:path>`,
})
export class StreamlineAiEditSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
