import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoNavIconListIcon],svg[fontisto-nav-icon-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.184 0H27.65v5.219H7.184zm0 9.39H27.65v5.219H7.184zm0 9.391H27.65V24H7.184zM0 0h5.219v5.219H0zm0 9.39h5.219v5.219H0zm0 9.391h5.219V24H0z"></svg:path>`,
})
export class FontistoNavIconListIcon {
  readonly viewBox = input("0 0 28 24")
  readonly width = input("1.17em")
  readonly height = input("1em")
}
