import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTableSettingsIcon],svg[lets-icons-table-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="2" d="M9 18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2M4 8h16M4 13h5"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M11.54 16.972a2 2 0 0 1 0-1.944l.676-1.213l.712-1.19a2 2 0 0 1 1.684-.973L16 11.63l1.388.022a2 2 0 0 1 1.684.972l.713 1.191l.674 1.213a2 2 0 0 1 0 1.944l-.674 1.213l-.713 1.19a2 2 0 0 1-1.684.973L16 20.37l-1.388-.022a2 2 0 0 1-1.684-.972l-.713-1.191z"></svg:path><svg:circle cx="16" cy="16" r="1" fill="currentColor"></svg:circle></svg:g>`,
})
export class LetsIconsTableSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
