import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDragRight02Icon],svg[hugeicons-drag-right-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7.033 13.653L9 15.373V6.5a1.5 1.5 0 0 1 3.001-.002l.004 4.764l2.636.427c1.702.26 2.553.389 3.152.753c.99.601 1.707 1.557 1.707 2.823c0 .918-.224 1.534-.768 3.19c-.345 1.05-.518 1.575-.8 1.99a3.53 3.53 0 0 1-1.934 1.414c-.478.14-1.023.14-2.115.14h-.926c-1.452 0-2.177 0-2.824-.27a4 4 0 0 1-.339-.164c-.614-.338-1.072-.91-1.987-2.052l-2.963-3.698a1.57 1.57 0 0 1-.008-1.954a1.52 1.52 0 0 1 2.197-.21"></svg:path><svg:path d="M12.438 9.5a4 4 0 1 0-3.876 0m8.955-5.504l1.743 1.44c.255.272.298.477.172.779a.8.8 0 0 1-.212.28l-1.703 1.51m-2.92-2.024h3.736"></svg:path></svg:g>`,
})
export class HugeiconsDragRight02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
