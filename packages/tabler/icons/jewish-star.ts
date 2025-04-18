import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerJewishStarIcon],svg[tabler-jewish-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 2l3 5h6l-3 5l3 5h-6l-3 5l-3-5H3l3-5l-3-5h6z"></svg:path>`,
})
export class TablerJewishStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
