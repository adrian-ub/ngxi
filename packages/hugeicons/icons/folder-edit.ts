import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderEditIcon],svg[hugeicons-folder-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.001 6.5h9.75c2.107 0 3.16 0 3.917.506a3 3 0 0 1 .827.827c.442.661.498 1.549.505 3.167m-9.999-4.5l-.633-1.267c-.525-1.05-1.005-2.106-2.168-2.542C8.69 2.5 8.11 2.5 6.945 2.5c-1.816 0-2.724 0-3.406.38a3 3 0 0 0-1.158 1.158c-.38.682-.38 1.59-.38 3.406V10.5c0 4.714 0 7.071 1.464 8.535c1.3 1.3 3.304 1.447 7.036 1.463h.5m9.861-6.558l.694.692a1.497 1.497 0 0 1 0 2.121l-3.638 3.696a2 2 0 0 1-1.05.551l-2.254.488a.5.5 0 0 1-.597-.593l.48-2.235c.074-.397.267-.762.553-1.047l3.684-3.674a1.507 1.507 0 0 1 2.127 0" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
