import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCodeSquareIcon],svg[mynaui-code-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C6.04 3 7.16 3 9.4 3h5.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C21 6.04 21 7.16 21 9.4v5.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C17.96 21 16.84 21 14.6 21H9.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C3 17.96 3 16.84 3 14.6z"></svg:path><svg:path d="m14.908 9.7l.132.131c1.022 1.022 1.534 1.534 1.534 2.169s-.512 1.146-1.534 2.169l-.132.132M13.072 8l-2.143 8M9.092 9.7l-.132.131C7.938 10.853 7.427 11.365 7.427 12s.51 1.146 1.533 2.169l.132.132"></svg:path></svg:g>`,
})
export class MynauiCodeSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
