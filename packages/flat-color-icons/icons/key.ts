import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsKeyIcon],svg[flat-color-icons-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#FFA000"><svg:path d="m30 41l-4 4h-4l-4-4V21h12v8l-2 2l2 2v2l-2 2l2 2z"></svg:path><svg:path d="M38 7.8c-.5-1.8-2-3.1-3.7-3.6C31.9 3.7 28.2 3 24 3s-7.9.7-10.3 1.2C12 4.7 10.5 6 10 7.8c-.5 1.7-1 4.1-1 6.7s.5 5 1 6.7c.5 1.8 1.9 3.1 3.7 3.5c2.4.6 6.1 1.3 10.3 1.3s7.9-.7 10.3-1.2c1.8-.4 3.2-1.8 3.7-3.5s1-4.1 1-6.7c0-2.7-.5-5.1-1-6.8M29 13H19c-1.1 0-2-.9-2-2V9c0-.6 3.1-1 7-1s7 .4 7 1v2c0 1.1-.9 2-2 2"></svg:path></svg:g><svg:path fill="#D68600" d="M23 26h2v19h-2z"></svg:path>`,
})
export class FlatColorIconsKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
