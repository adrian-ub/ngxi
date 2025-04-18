import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsKurtaIcon],svg[hugeicons-kurta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.377 16H5.084c-1.857 0-2.242-.374-2.033-2.22l.365-3.207C3.753 7.6 4.438 6.76 7.234 5.665L8.933 5V2c.973.317 2.035.838 3.067.838s2.094-.52 3.067-.838v3l1.7.665c2.795 1.094 3.48 1.934 3.817 4.908l.365 3.206c.21 1.847-.176 2.221-2.033 2.221h-1.293"></svg:path><svg:path d="m9 5l2.051.684a3 3 0 0 0 1.898 0L15 5m-8.036 5l-.46 10.958C6.468 21.822 6.647 22 7.511 22h8.978c.864 0 1.043-.178 1.007-1.042L17.036 10M12 13V6m0 3h1m-1 2.5h1"></svg:path></svg:g>`,
})
export class HugeiconsKurtaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
