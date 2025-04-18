import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCoatHangerIcon],svg[icon-park-coat-hanger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 13C19 10.2386 21.2386 8 24 8C26.7614 8 29 10.2386 29 13C29 15.7614 26.7614 18 24 18V22"></svg:path><svg:path fill="#2F88FF" d="M44 36H4C4 31 10 22 24 22C38 22 44 31 44 36Z"></svg:path></svg:g>`,
})
export class IconParkCoatHangerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
