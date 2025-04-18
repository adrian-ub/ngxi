import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMicIcon],svg[lets-icons-mic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:rect width="6" height="11" x="9" y="3" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M5 11a7 7 0 1 0 14 0m-7 10v-2"></svg:path></svg:g>`,
})
export class LetsIconsMicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
