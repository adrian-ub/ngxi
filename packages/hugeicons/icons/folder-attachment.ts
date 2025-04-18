import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFolderAttachmentIcon],svg[hugeicons-folder-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.5 20.5H12c-4.714 0-7.071 0-8.536-1.465C2 17.572 2 15.215 2 10.5V7.444c0-1.816 0-2.724.38-3.406A3 3 0 0 1 3.538 2.88c.682-.38 1.59-.38 3.406-.38c1.164 0 1.746 0 2.255.191c1.163.436 1.643 1.493 2.168 2.542L12 6.5m-5 0h9.75c2.107 0 3.16 0 3.917.506a3 3 0 0 1 .827.827C22 8.59 22 9.393 22 11.5m-1 4.462v2.461c0 1.7-1.343 3.077-3 3.077s-3-1.378-3-3.077V15.04c0-.85.672-1.539 1.5-1.539s1.5.689 1.5 1.539v3.384" color="currentColor"></svg:path>`,
})
export class HugeiconsFolderAttachmentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
