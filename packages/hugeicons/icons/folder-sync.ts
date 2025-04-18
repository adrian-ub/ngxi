import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderSyncIcon],svg[hugeicons-folder-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 6.5h9.75c2.107 0 3.16 0 3.917.506a3 3 0 0 1 .827.827C22 8.59 22 9.393 22 11.5m-10-5l-.633-1.267c-.525-1.05-1.005-2.106-2.168-2.542C8.69 2.5 8.108 2.5 6.944 2.5c-1.816 0-2.724 0-3.406.38A3 3 0 0 0 2.38 4.038C2 4.72 2 5.628 2 7.444V10.5c0 4.714 0 7.071 1.464 8.535c1.398 1.398 3.608 1.462 7.903 1.465m8.626-3.008l.755.4c.53.28.794.421 1.04.26c.246-.162.227-.415.19-.922c-.218-2.912-3.824-4.91-6.318-2.944m.345 3.206l-.755-.4c-.529-.28-.793-.42-1.04-.257c-.246.162-.226.415-.186.92c.23 2.888 3.816 4.912 6.248 2.99" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
