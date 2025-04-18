import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandThreejsIcon],svg[tabler-brand-threejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M8 22L3 3l19 5.5z"></svg:path><svg:path d="m12.573 17.58l-6.152-1.576l8.796-9.466l1.914 6.64"></svg:path><svg:path d="M12.573 17.58L11 11l6.13 2.179M9.527 4.893L11 11L4.69 9.436z"></svg:path></svg:g>`,
})
export class TablerBrandThreejsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
