import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMushroomOffIcon],svg[tabler-mushroom-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.874 5.89A8.13 8.13 0 0 0 4 11.1a.9.9 0 0 0 .9.9H12m4 0h3.1a.9.9 0 0 0 .9-.9C20 6.626 16.418 3 12 3c-1.43 0-2.774.38-3.936 1.047M10 12v7a2 2 0 1 0 4 0v-5M3 3l18 18"></svg:path>`,
})
export class TablerMushroomOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
