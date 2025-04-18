import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerAerialLiftIcon],svg[tabler-aerial-lift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 5l16-2m-8 1v10M6.894 8H17.2c2.45 3 2.45 9-.2 12H6.894c-2.544-3-2.544-9 0-12M5 14h14"></svg:path>`,
})
export class TablerAerialLiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
