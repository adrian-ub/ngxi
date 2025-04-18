import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandComedyCentralIcon],svg[tabler-brand-comedy-central-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5.343 17.657a8 8 0 1 0 0-11.314"></svg:path><svg:path d="M13.828 9.172a4 4 0 1 0 0 5.656"></svg:path></svg:g>`,
})
export class TablerBrandComedyCentralIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
