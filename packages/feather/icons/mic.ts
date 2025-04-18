import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherMicIcon],svg[feather-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3"></svg:path><svg:path d="M19 10v2a7 7 0 0 1-14 0v-2m7 9v4m-4 0h8"></svg:path></svg:g>`,
})
export class FeatherMicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
