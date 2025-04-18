import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPlayerproIcon],svg[arcticons-playerpro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="24" r="18.5"></svg:circle><svg:circle cx="24" cy="24" r="14.705"></svg:circle><svg:path d="M30.494 24L21.3 29.308V18.692z"></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7.635" cy="7.635" r="2.135"></svg:circle><svg:path d="M9.113 9.174L6.096 6.156"></svg:path><svg:circle cx="7.635" cy="40.365" r="2.135"></svg:circle><svg:path d="m9.174 38.887l-3.018 3.017"></svg:path><svg:circle cx="40.365" cy="7.635" r="2.135"></svg:circle><svg:path d="m38.887 9.174l3.017-3.018"></svg:path><svg:circle cx="40.365" cy="40.365" r="2.135"></svg:circle><svg:path d="m38.826 38.887l3.018 3.017"></svg:path></svg:g>`,
})
export class ArcticonsPlayerproIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
