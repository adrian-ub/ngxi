import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCubes3Icon],svg[gravity-ui-cubes-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 2h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1M4 3A2.5 2.5 0 0 1 6.5.5h3A2.5 2.5 0 0 1 12 3v3c0 .356-.074.694-.208 1H13a2.5 2.5 0 0 1 2.5 2.5v3A2.5 2.5 0 0 1 13 15H3a2.5 2.5 0 0 1-2.5-2.5v-3A2.5 2.5 0 0 1 3 7h1.208A2.5 2.5 0 0 1 4 6zm2.25 5.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1zm3.5 5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1H13a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCubes3Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
