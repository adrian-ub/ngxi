import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotonePictureIcon],svg[icon-park-twotone-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTPicture0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M39 6H9a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h30a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3"></svg:path><svg:path fill="#555" d="M18 23a5 5 0 1 0 0-10a5 5 0 0 0 0 10"></svg:path><svg:path d="M27.79 26.22a2 2 0 0 1 3.243.053l8.775 12.583c.924 1.326-.025 3.144-1.64 3.144H16z"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPicture0)"></svg:path>`,
})
export class IconParkTwotonePictureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
