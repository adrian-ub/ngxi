import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiMicrophoneSolidIcon],svg[mynaui-microphone-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 2.25c-2.51 0-4.75 1.767-4.75 4.179v5.142c0 2.412 2.24 4.179 4.75 4.179s4.75-1.767 4.75-4.179V6.43c0-2.412-2.24-4.179-4.75-4.179"></svg:path><svg:path d="M5.75 11a.75.75 0 0 0-1.5 0a7.75 7.75 0 0 0 7 7.714v1.536H8a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5h-3.25v-1.536a7.75 7.75 0 0 0 7-7.714a.75.75 0 0 0-1.5 0a6.25 6.25 0 1 1-12.5 0"></svg:path></svg:g>`,
})
export class MynauiMicrophoneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
