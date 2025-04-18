import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biCapsuleIcon],svg[bi-capsule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.828 8.9L8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771l2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429z"></svg:path>`,
})
export class BiCapsuleIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
