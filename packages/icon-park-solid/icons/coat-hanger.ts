import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCoatHangerIcon],svg[icon-park-solid-coat-hanger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 13a5 5 0 1 1 5 5v4"></svg:path><svg:path fill="currentColor" d="M44 36H4c0-5 6-14 20-14s20 9 20 14"></svg:path></svg:g>`,
})
export class IconParkSolidCoatHangerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
