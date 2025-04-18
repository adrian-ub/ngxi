import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLevelEightTitleIcon],svg[icon-park-level-eight-title-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 8V40"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 8V40"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M7 24H23"></svg:path><svg:path d="M37 29C39.2091 29 41 27.2091 41 25C41 22.7909 39.2091 21 37 21C34.7909 21 33 22.7909 33 25C33 27.2091 34.7909 29 37 29Z"></svg:path><svg:path d="M37 40C39.7614 40 42 37.7614 42 35C42 32.2386 39.7614 30 37 30C34.2386 30 32 32.2386 32 35C32 37.7614 34.2386 40 37 40Z"></svg:path></svg:g>`,
})
export class IconParkLevelEightTitleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
