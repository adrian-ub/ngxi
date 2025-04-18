import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMicDuotoneIcon],svg[lets-icons-mic-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.2"><svg:rect width="6" height="11" x="9" y="3" fill="currentColor" fill-opacity=".25" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M5.4 11a6.6 6.6 0 1 0 13.2 0M12 21v-2"></svg:path></svg:g>`,
})
export class LetsIconsMicDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
