import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBounceLeftIcon],svg[hugeicons-bounce-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M9 10c2.115 3.01 3.105 7.153 3.752 10.086c.131.596.197.895.335.913s.28-.265.561-.833c1.346-2.708 4.135-5.104 6.352-3.058"></svg:path><svg:circle cx="2" cy="2" r="2" transform="matrix(-1 0 0 1 8 3)"></svg:circle></svg:g>`,
})
export class HugeiconsBounceLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
