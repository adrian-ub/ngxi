import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenQrdoIcon],svg[token-qrdo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.81a6.187 6.187 0 0 0-6.064 7.424a1.407 1.407 0 0 1-2.756.563a9 9 0 1 1 17.82-1.8h-2.813A6.19 6.19 0 0 0 12 5.809"></svg:path><svg:path fill="currentColor" d="M19.2 9.186a1.407 1.407 0 0 1 1.643 1.125q.157.831.157 1.677v.005c0 2.295-.86 4.388-2.273 5.98l.546.658a1.406 1.406 0 0 1-2.171 1.788l-.546-.663A8.999 8.999 0 0 1 3 11.993h2.812a6.187 6.187 0 0 0 8.922 5.552l-.822-.996a1.407 1.407 0 1 1 2.172-1.788l.832 1.007a6.16 6.16 0 0 0 1.17-4.933a1.406 1.406 0 0 1 1.12-1.643z"></svg:path><svg:path fill="currentColor" d="M5.83 12.47q.032.395.106.765a1.406 1.406 0 1 1-2.756.562a9 9 0 0 1-.18-1.8h2.812"></svg:path>`,
})
export class TokenQrdoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
