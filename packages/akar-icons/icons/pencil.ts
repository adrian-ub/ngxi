import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsPencilIcon],svg[akar-icons-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4.333 16.048L16.57 3.81a2.56 2.56 0 0 1 3.62 3.619L7.951 19.667a2 2 0 0 1-1.022.547L3 21l.786-3.93a2 2 0 0 1 .547-1.022"></svg:path><svg:path d="m14.5 6.5l3 3"></svg:path></svg:g>`,
})
export class AkarIconsPencilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
