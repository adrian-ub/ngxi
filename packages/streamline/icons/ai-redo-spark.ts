import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAiRedoSparkIcon],svg[streamline-ai-redo-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.04 13.448v-2.48h2.48"></svg:path><svg:path d="M13.339 5.815a6.449 6.449 0 0 1-11.3 5.308M.661 8.185a6.449 6.449 0 0 1 11.3-5.308"></svg:path><svg:path d="M11.96.552v2.48H9.48M4.09 7.334c-.351-.061-.351-.565 0-.626a3.18 3.18 0 0 0 2.558-2.45l.021-.097c.076-.347.57-.349.649-.003l.026.113a3.19 3.19 0 0 0 2.565 2.435c.353.061.353.568 0 .63A3.19 3.19 0 0 0 7.344 9.77l-.026.112c-.079.346-.573.344-.649-.003l-.02-.096a3.18 3.18 0 0 0-2.56-2.45Z"></svg:path></svg:g>`,
})
export class StreamlineAiRedoSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
