import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAiUpscaleSparkIcon],svg[streamline-ai-upscale-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.5 12.5a6 6 0 1 0 0-12a6 6 0 0 0 0 12m4.24-1.76l2.76 2.76"></svg:path><svg:path d="M3.45 6.828c-.368-.064-.368-.592 0-.656a3.33 3.33 0 0 0 2.68-2.568l.022-.101c.08-.364.597-.366.68-.003l.027.118A3.35 3.35 0 0 0 9.55 6.17c.37.065.37.595 0 .66a3.35 3.35 0 0 0-2.69 2.552l-.027.118c-.083.363-.6.36-.68-.003l-.022-.1a3.33 3.33 0 0 0-2.681-2.57Z"></svg:path></svg:g>`,
})
export class StreamlineAiUpscaleSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
