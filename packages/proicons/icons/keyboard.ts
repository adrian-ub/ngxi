import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsKeyboardIcon],svg[proicons-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="18.5" height="13.5" x="2.75" y="5.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" rx="3"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 15.38h8"></svg:path><svg:circle cx="7.5" cy="8.875" r="1" fill="currentColor"></svg:circle><svg:circle cx="10.5" cy="8.875" r="1" fill="currentColor"></svg:circle><svg:circle cx="13.5" cy="8.875" r="1" fill="currentColor"></svg:circle><svg:circle cx="16.5" cy="8.875" r="1" fill="currentColor"></svg:circle><svg:circle cx="7.5" cy="11.875" r="1" fill="currentColor"></svg:circle><svg:circle cx="10.5" cy="11.875" r="1" fill="currentColor"></svg:circle><svg:circle cx="13.5" cy="11.875" r="1" fill="currentColor"></svg:circle><svg:circle cx="16.5" cy="11.875" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class ProiconsKeyboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
