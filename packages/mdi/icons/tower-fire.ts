import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTowerFireIcon],svg[mdi-tower-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v4h1v2h-.36L21 23h-2.07l-.56-2.17L12 17.15l-6.37 3.68L5.07 23H3l3.36-13H6V8h1V4H6V3l6-2l6 2v1zM7.28 14.43l-.95 3.69L10 16zM15.57 10H8.43l-.63 2.42l4.2 2.43l4.2-2.43zm2.1 8.12l-.95-3.69L14 16z"></svg:path>`,
})
export class MdiTowerFireIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
