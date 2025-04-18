import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiCartCheckSolidIcon],svg[mynaui-cart-check-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.72 2.788l.55 1.862h14.654c1.84 0 3.245 1.717 2.715 3.51l-1.655 5.6c-.352 1.194-1.471 1.99-2.715 1.99H8.113c-1.244 0-2.362-.796-2.715-1.99L2.281 3.213a.75.75 0 1 1 1.438-.425m11.372 6.151a.75.75 0 0 0-1.216-.878l-1.713 2.371l-.599-.684a.75.75 0 1 0-1.128.988l1.034 1.181a.974.974 0 0 0 1.522-.07zM8.5 17.25a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m8 0a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5"></svg:path>`,
})
export class MynauiCartCheckSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
