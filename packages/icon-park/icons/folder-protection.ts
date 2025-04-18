import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFolderProtectionIcon],svg[icon-park-folder-protection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M5 8C5 6.89543 5.89543 6 7 6H19L24 12H41C42.1046 12 43 12.8954 43 14V40C43 41.1046 42.1046 42 41 42H7C5.89543 42 5 41.1046 5 40V8Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" stroke-linecap="round" d="M18 22.8C18 21.8667 24 20 24 20C24 20 30 21.8667 30 22.8C30 30.2667 24 34 24 34C24 34 18 30.2667 18 22.8Z"></svg:path></svg:g>`,
})
export class IconParkFolderProtectionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
