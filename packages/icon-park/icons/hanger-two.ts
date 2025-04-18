import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHangerTwoIcon],svg[icon-park-hanger-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M37 32H40.9098C42.6165 32 44 30.6165 44 28.9098C44 27.7394 43.3387 26.6693 42.2918 26.1459L24 17L5.7082 26.1459C4.6613 26.6693 4 27.7394 4 28.9098C4 30.6165 5.38352 32 7.09017 32H11"></svg:path><svg:path fill="#2F88FF" d="M11 30H37V32V44H11V32V30Z"></svg:path><svg:path d="M24 17C24 17 28 10.2091 28 8C28 5.79086 26.2091 4 24 4C21.7909 4 20 5.79086 20 8"></svg:path></svg:g>`,
})
export class IconParkHangerTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
