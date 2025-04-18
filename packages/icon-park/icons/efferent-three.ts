import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEfferentThreeIcon],svg[icon-park-efferent-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 6H9C7.34315 6 6 7.34315 6 9V39C6 40.6569 7.34315 42 9 42H39C40.6569 42 42 40.6569 42 39V29"></svg:path><svg:path d="M42 19L38 7L26 11"></svg:path><svg:path d="M38 7C33 22 30 25 20 29"></svg:path></svg:g>`,
})
export class IconParkEfferentThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
