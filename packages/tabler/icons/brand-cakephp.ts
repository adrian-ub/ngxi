import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandCakephpIcon],svg[tabler-brand-cakephp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 11l8 2c1.361-.545 2-1.248 2-2V7.2C22 5.435 17.521 4 11.998 4C6.476 4 2 5.435 2 7.2V10c0 1.766 4.478 4 10 4zm0 3v3l8 2c1.362-.547 2-1.246 2-2v-3c0 .754-.638 1.453-2 2zM2 17c0 1.766 4.476 3 9.998 3L12 17c-5.522 0-10-1.734-10-3.5zm0-7v4m20-4v4"></svg:path>`,
})
export class TablerBrandCakephpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
