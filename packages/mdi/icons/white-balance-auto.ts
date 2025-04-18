import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWhiteBalanceAutoIcon],svg[mdi-white-balance-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.3 16l-.7-2H6.4l-.7 2H3.8L7 7h2l3.2 9M22 7l-1.2 6.29L19.3 7h-1.6l-1.49 6.29L15 7h-.76C12.77 5.17 10.5 4 8 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.13 0 5.84-1.81 7.15-4.43l.1.43H17l1.5-6.1L20 16h1.75l2.05-9M6.85 12.65h2.3L8 9z"></svg:path>`,
})
export class MdiWhiteBalanceAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
