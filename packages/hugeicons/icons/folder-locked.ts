import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderLockedIcon],svg[hugeicons-folder-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.003 20.5c-4.716 0-7.073 0-8.538-1.465C2 17.572 2 15.215 2 10.5V7.444c0-1.816 0-2.724.38-3.406A3 3 0 0 1 3.538 2.88c.682-.38 1.59-.38 3.408-.38c1.164 0 1.746 0 2.255.191c1.163.436 1.643 1.493 2.168 2.542l.634 1.267M7 6.5h9.753c2.107 0 3.16 0 3.918.506a3 3 0 0 1 .828.827c.394.59.48 1.36.5 2.667m-5.262 5.176v-1.391c0-.206.009-.414.082-.605c.196-.511.715-1.18 1.66-1.18s1.484.669 1.68 1.18c.074.191.082.4.082.605v1.39M16.807 21.5h3.385c.997 0 1.805-.807 1.805-1.802v-2.002c0-.995-.808-1.802-1.805-1.802h-3.385c-.997 0-1.805.807-1.805 1.802v2.002c0 .995.808 1.802 1.805 1.802" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderLockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
