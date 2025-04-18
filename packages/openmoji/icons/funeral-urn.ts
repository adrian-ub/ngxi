import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFuneralUrnIcon],svg[openmoji-funeral-urn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#f4aa41" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m44.797 15.175l3.362-2.94a2.12 2.12 0 0 0-.545-3.533a27.5 27.5 0 0 0-11.338-2.339a27.5 27.5 0 0 0-11.337 2.34a2.12 2.12 0 0 0-.545 3.531l3.66 3.201c-4.847 3.043-9.185 8.356-9.185 14.416c0 10.739 8.561 35.786 8.561 35.786h17.14s8.561-25.047 8.561-35.786a17.1 17.1 0 0 0-8.334-14.676"></svg:path><svg:path fill="none" stroke="#e27022" stroke-linecap="square" stroke-linejoin="round" stroke-width="2" d="M28.053 15.435a30.95 30.95 0 0 1 16.744-.26"></svg:path><svg:path fill="#e27022" d="M40.1 61.289H27.043l-1.25-4.072H41.02z"></svg:path><svg:path fill="none" stroke="#e27022" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.645 29.522h32.71m-32.71 4.566h32.176"></svg:path><svg:path fill="#e27022" d="M44.797 15.175h-1.142c0 1.093 2.627 8.437 2.627 14.676c0 10.739-8.561 35.786-8.561 35.786h6.849s8.561-25.047 8.561-35.786a17.1 17.1 0 0 0-8.334-14.676"></svg:path><svg:path fill="#e27022" d="M44.797 8.116c2.455 3.004.466 2.303-1.142 7.06c3.517 2.504 5.206-4.784 5.206-4.784s-1.875-2.846-4.064-2.276"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m44.797 15.175l3.362-2.94a2.12 2.12 0 0 0-.545-3.533a27.5 27.5 0 0 0-11.338-2.339a27.5 27.5 0 0 0-11.337 2.34a2.12 2.12 0 0 0-.545 3.531l3.66 3.201c-4.847 3.043-9.185 8.356-9.185 14.416c0 10.739 8.561 35.786 8.561 35.786h17.14s8.561-25.047 8.561-35.786a17.1 17.1 0 0 0-8.334-14.676"></svg:path>`,
})
export class OpenmojiFuneralUrnIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
