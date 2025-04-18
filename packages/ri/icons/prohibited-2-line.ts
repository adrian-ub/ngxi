import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riProhibited2LineIcon],svg[ri-prohibited-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.906 5.68L5.68 16.906A8 8 0 0 1 16.906 5.68M7.094 18.32L18.32 7.094A8 8 0 0 1 7.094 18.32M12 2C6.477 2 2 6.477 2 12s4.478 10 10 10s10-4.477 10-10S17.522 2 12 2"></svg:path>`,
})
export class RiProhibited2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
