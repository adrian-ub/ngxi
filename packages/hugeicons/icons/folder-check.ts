import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderCheckIcon],svg[hugeicons-folder-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 7h9.75c2.107 0 3.16 0 3.917.506a3 3 0 0 1 .827.827C21.98 9.06 22 10.06 22 12M12 7l-.633-1.267c-.525-1.05-1.005-2.106-2.168-2.542C8.69 3 8.108 3 6.944 3c-1.816 0-2.724 0-3.406.38A3 3 0 0 0 2.38 4.538C2 5.22 2 6.128 2 7.944V11c0 4.714 0 7.071 1.464 8.535c1.3 1.3 3.304 1.447 7.036 1.463M13 19s1 0 2 2c0 0 3.177-5 6-6" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
