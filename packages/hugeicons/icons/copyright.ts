import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCopyrightIcon],svg[hugeicons-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="M15 14a2 2 0 0 1-2 2h-1c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C9 14.398 9 13.932 9 13v-2c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C10.602 8 11.068 8 12 8h1a2 2 0 0 1 2 2"></svg:path></svg:g>`,
})
export class HugeiconsCopyrightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
