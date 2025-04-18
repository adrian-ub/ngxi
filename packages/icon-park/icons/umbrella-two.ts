import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkUmbrellaTwoIcon],svg[icon-park-umbrella-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke="#000" d="M27 24V37.125C27 39 26.6379 44 23 44C19.5714 44 19 39.625 19 38.375"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M24 4C38.5 4 43.375 17.3333 44 24H4C4.625 17.3333 9.5 4 24 4Z"></svg:path><svg:path stroke="#fff" d="M19 14L23 18L29 11"></svg:path></svg:g>`,
})
export class IconParkUmbrellaTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
