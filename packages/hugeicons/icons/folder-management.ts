import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderManagementIcon],svg[hugeicons-folder-management-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 6.5h9.75c2.107 0 3.16 0 3.917.506a3 3 0 0 1 .827.827c.442.661.498 1.549.505 3.167M12 6.5l-.633-1.267c-.525-1.05-1.005-2.106-2.168-2.542C8.69 2.5 8.108 2.5 6.944 2.5c-1.816 0-2.724 0-3.406.38A3 3 0 0 0 2.38 4.038C2 4.72 2 5.628 2 7.444V10.5c0 4.714 0 7.071 1.464 8.535c1.3 1.3 3.304 1.447 7.036 1.463h.5m7-.284V21.5m0-1.286a3.36 3.36 0 0 1-2.774-1.43M18 20.213a3.36 3.36 0 0 0 2.774-1.43M18 13.785c1.157 0 2.176.568 2.774 1.43M18 13.787a3.36 3.36 0 0 0-2.774 1.43M18 13.787V12.5m4 1.929l-1.226.788M14 19.57l1.226-.788M14 14.43l1.226.788M22 19.57l-1.226-.788m0-3.566a3.12 3.12 0 0 1 0 3.566m-5.548-3.566a3.12 3.12 0 0 0 0 3.566" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderManagementIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
