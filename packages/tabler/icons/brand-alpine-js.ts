import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandAlpineJsIcon],svg[tabler-brand-alpine-js-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 11.5L7.5 16h9l-9-9z"></svg:path><svg:path d="m16.5 16l4.5-4.5L16.5 7L12 11.5"></svg:path></svg:g>`,
})
export class TablerBrandAlpineJsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
