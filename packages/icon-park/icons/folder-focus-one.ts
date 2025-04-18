import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderFocusOneIcon],svg[icon-park-folder-focus-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M43 23V14C43 12.8954 42.1046 12 41 12H24L19 6H7C5.89543 6 5 6.89543 5 8V40C5 41.1046 5.89543 42 7 42H22"></svg:path><svg:path fill="#2F88FF" d="M35 27L37.243 31.9128L42.6085 32.5279L38.6292 36.1792L39.7023 41.4721L35 38.816L30.2977 41.4721L31.3708 36.1792L27.3915 32.5279L32.757 31.9128L35 27Z"></svg:path></svg:g>`,
})
export class IconParkFolderFocusOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
