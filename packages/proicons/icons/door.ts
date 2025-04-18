import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsDoorIcon],svg[proicons-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5.25 6.25a2.5 2.5 0 0 1 2.5-2.5h8.5a2.5 2.5 0 0 1 2.5 2.5v15H5.25zm-2.5 15h18.5"></svg:path><svg:circle cx="15.25" cy="12.5" r="1.5" fill="currentColor"></svg:circle></svg:g>`,
})
export class ProiconsDoorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
