import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChefHatOffIcon],svg[tabler-chef-hat-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.72 4.712a4 4 0 0 1 7.19 1.439A4 4 0 0 1 18 13.874V14m0 4v3H6v-7.126a4 4 0 0 1 .081-7.796m.08 10.931L17 17M3 3l18 18"></svg:path>`,
})
export class TablerChefHatOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
