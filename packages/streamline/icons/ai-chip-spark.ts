import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAiChipSparkIcon],svg[streamline-ai-chip-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.5 8.833H.679m12.642 0H11.5m-9-3.666H.679m12.642 0H11.5M5.167 2.5V.679m0 12.642V11.5m3.666-9V.679m0 12.642V11.5m1.667-9h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1"></svg:path><svg:path d="M4.667 7.25c-.281-.048-.281-.452 0-.501a2.55 2.55 0 0 0 2.05-1.964l.018-.078c.06-.278.457-.28.52-.002l.02.09a2.56 2.56 0 0 0 2.057 1.953c.283.049.283.455 0 .504a2.56 2.56 0 0 0-2.057 1.952l-.02.09c-.063.278-.46.276-.52-.002l-.017-.077A2.55 2.55 0 0 0 4.667 7.25"></svg:path></svg:g>`,
})
export class StreamlineAiChipSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
