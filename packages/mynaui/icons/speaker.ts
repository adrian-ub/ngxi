import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiSpeakerIcon],svg[mynaui-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9 14a3 3 0 1 0 6 0a3 3 0 0 0-6 0m2.5-7h1"></svg:path><svg:path d="M12 3c3.418 0 5.127 0 6.188 1.318C19.25 5.636 19.25 7.758 19.25 12s0 6.364-1.062 7.682C17.127 21 15.418 21 12 21s-5.127 0-6.188-1.318C4.75 18.364 4.75 16.242 4.75 12s0-6.364 1.062-7.682C6.873 3 8.582 3 12 3"></svg:path></svg:g>`,
})
export class MynauiSpeakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
