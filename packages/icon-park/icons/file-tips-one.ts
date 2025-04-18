import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFileTipsOneIcon],svg[icon-park-file-tips-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 23V14L31 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H22"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33 26V36"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M33 46C34.3807 46 35.5 44.8807 35.5 43.5C35.5 42.1193 34.3807 41 33 41C31.6193 41 30.5 42.1193 30.5 43.5C30.5 44.8807 31.6193 46 33 46Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 4V14H40"></svg:path></svg:g>`,
})
export class IconParkFileTipsOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
