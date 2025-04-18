import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsPeopleGroupIcon],svg[akar-icons-people-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="m16.719 19.752l-.64-5.124A3 3 0 0 0 13.101 12h-2.204a3 3 0 0 0-2.976 2.628l-.641 5.124A2 2 0 0 0 9.266 22h5.468a2 2 0 0 0 1.985-2.248"></svg:path><svg:circle cx="12" cy="5" r="3"></svg:circle><svg:circle cx="4" cy="9" r="2"></svg:circle><svg:circle cx="20" cy="9" r="2"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 14h-.306a2 2 0 0 0-1.973 1.671l-.333 2A2 2 0 0 0 3.361 20H7m13-6h.306a2 2 0 0 1 1.973 1.671l.333 2A2 2 0 0 1 20.639 20H17"></svg:path></svg:g>`,
})
export class AkarIconsPeopleGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
