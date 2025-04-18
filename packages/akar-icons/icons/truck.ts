import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsTruckIcon],svg[akar-icons-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 17h6V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a1 1 0 0 0 1 1h1m18-1v-4a4 4 0 0 0-4-4h-2v9h5a1 1 0 0 0 1-1m-7 1a3 3 0 1 0 6 0zm7-3h-2"></svg:path><svg:circle cx="7" cy="17" r="3"></svg:circle></svg:g>`,
})
export class AkarIconsTruckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
