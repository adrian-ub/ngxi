import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsEmojiSmileSideIcon],svg[lineicons-emoji-smile-side-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.014 15.224a.75.75 0 1 0-1.235-.853a5.5 5.5 0 0 1-4.529 2.379a.75.75 0 0 0 0 1.5c2.391 0 4.502-1.2 5.764-3.026M8.75 7.983a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5m7.75 1.25a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2M3.5 12a8.5 8.5 0 1 1 17 0a8.5 8.5 0 0 1-17 0" clip-rule="evenodd"></svg:path>`,
})
export class LineiconsEmojiSmileSideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
