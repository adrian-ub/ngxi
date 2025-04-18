import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCycleOneIcon],svg[icon-park-cycle-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 20C6 12 10 8 18 8"></svg:path><svg:path d="M40 30C40 38 36 42 28 42"></svg:path><svg:path fill="#2F88FF" d="M28 18C28 12.4772 32.4772 8 38 8H42V22H28V18Z"></svg:path><svg:path fill="#2F88FF" d="M6 28H20V32C20 37.5228 15.5228 42 10 42H6V28Z"></svg:path></svg:g>`,
})
export class IconParkCycleOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
