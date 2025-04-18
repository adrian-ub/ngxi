import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandDeliverooIcon],svg[tabler-brand-deliveroo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m15 11l1-9l5 .5L20 16l-3 6l-12.5-2.5l-1.5-6l7-1.5l-1.5-7.5l4.5-1z"></svg:path><svg:circle cx="15.5" cy="15.5" r="1" fill="currentColor"></svg:circle><svg:circle cx="11.5" cy="14.5" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class TablerBrandDeliverooIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
