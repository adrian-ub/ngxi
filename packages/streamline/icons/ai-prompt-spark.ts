import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAiPromptSparkIcon],svg[streamline-ai-prompt-spark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.02 3.485h-3.5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-4m-11-2.5h6.5"></svg:path><svg:path d="m3.02 10.985l1.5-1.5l-1.5-1.5m3 3h1.5m-.124-7.036c-.35-.061-.35-.565 0-.626A3.18 3.18 0 0 0 9.955.873l.02-.097c.077-.347.57-.35.65-.003l.025.113a3.19 3.19 0 0 0 2.566 2.435c.352.061.352.568 0 .63a3.19 3.19 0 0 0-2.566 2.435l-.026.112c-.079.346-.572.344-.648-.003L9.955 6.4a3.18 3.18 0 0 0-2.559-2.45Z"></svg:path></svg:g>`,
})
export class StreamlineAiPromptSparkIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
