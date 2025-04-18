import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLitecoinIcon],svg[hugeicons-litecoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"></svg:path><svg:path d="m11.5 6.5l-1.343 4.795m0 0l-.86 3.072c-.273.977-.41 1.466-.17 1.8c.24.333.729.333 1.706.333H15.5m-5.343-5.205L7.5 12.333m2.657-1.038L13.9 9.833"></svg:path></svg:g>`,
})
export class HugeiconsLitecoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
