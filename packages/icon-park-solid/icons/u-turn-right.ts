import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidUTurnRightIcon],svg[icon-park-solid-u-turn-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 13H15C8.925 13 4 17.925 4 24v0c0 6.075 4.925 11 11 11h29"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m39 30l5 5l-5 5"></svg:path><svg:circle cx="39" cy="13" r="5" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkSolidUTurnRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
