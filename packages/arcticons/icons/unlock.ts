import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUnlockIcon],svg[arcticons-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.51 20.609h24.98c.947 0 1.715.768 1.715 1.715v18.46c0 .948-.768 1.716-1.715 1.716H11.51a1.715 1.715 0 0 1-1.715-1.715V22.324c0-.947.768-1.715 1.715-1.715m3.088-5.744a9.394 9.394 0 0 1 18.788 0v5.744"></svg:path><svg:circle cx="23.992" cy="31.554" r="3.643" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsUnlockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
