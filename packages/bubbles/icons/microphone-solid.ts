import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesMicrophoneSolidIcon],svg[bubbles-microphone-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M8 10.667a3.003 3.003 0 0 0 3-3V3a3 3 0 0 0-6 0v4.667a3.003 3.003 0 0 0 3 3"></svg:path><svg:path d="M12.667 5.334A.667.667 0 0 0 12 6v1.667a4 4 0 0 1-8 0V6a.667.667 0 0 0-1.333 0v1.667a5.34 5.34 0 0 0 4.525 5.272a.17.17 0 0 1 .141.165v2.23a.667.667 0 1 0 1.334 0v-2.23a.17.17 0 0 1 .141-.165a5.34 5.34 0 0 0 4.525-5.272V6a.666.666 0 0 0-.666-.667"></svg:path></svg:g>`,
})
export class BubblesMicrophoneSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
