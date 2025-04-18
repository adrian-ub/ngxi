import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandGuardianIcon],svg[tabler-brand-guardian-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 13h6M4 12c0-9.296 9.5-9 9.5-9C10.692 3 9 7.373 9 12s1.763 8.976 4.572 8.976C13.572 20.999 4 22.068 4 12m10.5-9c1.416 0 3.853 1.16 4.5 2v3.5M15 13v8s2.77-.37 4-2v-6m-5.5 8H15M13.5 3h1"></svg:path>`,
})
export class TablerBrandGuardianIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
