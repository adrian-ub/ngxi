import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAiGenerateMusicSparkIcon],svg[streamline-ai-generate-music-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.12 13.462a1.597 1.597 0 1 0 0-3.193a1.597 1.597 0 0 0 0 3.193m7.186-1.597a1.597 1.597 0 1 0 0-3.193a1.597 1.597 0 0 0 0 3.193"></svg:path><svg:path d="M3.717 11.865V5.383a.4.4 0 0 1 .296-.384l1.26-.361M3.717 7.474l4.06-1.128m3.125 3.923V8.86m-3.51-4.888c-.35-.061-.35-.565 0-.626A3.18 3.18 0 0 0 9.951.896l.021-.097c.076-.347.57-.349.649-.003l.025.113a3.19 3.19 0 0 0 2.566 2.435c.353.062.353.568 0 .63a3.19 3.19 0 0 0-2.566 2.435l-.025.112c-.08.347-.573.344-.649-.002l-.021-.097a3.18 3.18 0 0 0-2.559-2.45"></svg:path></svg:g>`,
})
export class StreamlineAiGenerateMusicSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
