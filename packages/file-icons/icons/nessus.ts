import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fileIconsNessusIcon],svg[file-icons-nessus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.575.852L431.574 62.75a25 25 0 0 1 17.677 17.677l61.897 231a25 25 0 0 1-6.47 24.148L335.573 504.677a25 25 0 0 1-24.149 6.47L80.426 449.252a25 25 0 0 1-17.677-17.677l-61.897-231a25 25 0 0 1 6.47-24.148L176.427 7.323a25 25 0 0 1 24.149-6.47M183.13 22.68L22.68 183.13a20 20 0 0 0-5.176 19.318l58.728 219.177a20 20 0 0 0 14.142 14.142l219.178 58.729a20 20 0 0 0 19.318-5.176l160.45-160.45a20 20 0 0 0 5.176-19.318L435.768 90.375a20 20 0 0 0-14.142-14.142L202.448 17.504a20 20 0 0 0-19.318 5.176"></svg:path>`,
})
export class FileIconsNessusIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
