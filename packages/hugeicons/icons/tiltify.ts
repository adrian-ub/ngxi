import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTiltifyIcon],svg[hugeicons-tiltify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.956 21.406c.38.43.92.67 1.49.67c1 0 1.85-.75 1.98-1.75l1.17-9.33l3.19 1.41c.95.41 2.05.02 2.51-.9s.13-2.05-.75-2.57l-10-5.99c-.62-.37-1.35-.47-2.05-.29s-1.28.62-1.64 1.25c-.38.66-.46 1.45-.22 2.16c.23.71.76 1.3 1.45 1.6l3.65 1.62l-1.27 10.56c-.07.57.11 1.13.49 1.56m-2.09-17.29c.1-.03.2-.04.3-.04l.01.01c.21 0 .42.06.6.17l10 5.99c.2.11.28.39.17.6c-.11.2-.36.29-.57.2l-4.1-1.82a.72.72 0 0 0-.67.03c-.21.12-.35.32-.38.56l-1.29 10.33c-.03.24-.24.43-.49.43a.495.495 0 0 1-.49-.55l1.33-11.11a.75.75 0 0 0-.44-.77l-4.16-1.84c-.3-.14-.53-.38-.63-.7c-.11-.32-.07-.65.09-.94c.16-.28.41-.47.72-.55m10.13 1.71c0 1.24 1.01 2.25 2.25 2.25s2.25-1.01 2.25-2.25s-1.01-2.25-2.25-2.25s-2.25 1.01-2.25 2.25m1.5 0c0-.41.34-.75.75-.75s.75.34.75.75s-.34.75-.75.75s-.75-.34-.75-.75" color="currentColor"></svg:path>`,
})
export class HugeiconsTiltifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
