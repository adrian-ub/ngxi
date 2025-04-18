import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandBandlabIcon],svg[tabler-brand-bandlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m6.885 7l-2.536 4.907C2.328 15.752 1.85 20.682 8.17 21h6.808c4.86-.207 7.989-2.975 4.607-9.093L16.597 7"></svg:path><svg:path d="M15.078 4H9.942l3.678 8.768c.547 1.14.847 1.822.162 2.676c-.053.093-1.332 1.907-3.053 1.495c-.825-.187-1.384-.926-1.32-1.74c.04-.91.62-1.717 1.488-2.074a4.46 4.46 0 0 1 2.723-.358"></svg:path></svg:g>`,
})
export class TablerBrandBandlabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
