import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilCapsuleIcon],svg[uil-capsule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 4.5a5.12 5.12 0 0 0-7.24 0L4.5 12.26a5.12 5.12 0 1 0 7.24 7.24l7.76-7.76a5.12 5.12 0 0 0 0-7.24m-9.18 13.59a3.21 3.21 0 0 1-4.41 0a3.13 3.13 0 0 1 0-4.41l3.18-3.18l4.41 4.41Zm7.77-7.77l-3.18 3.18l-4.41-4.41l3.18-3.18a3.12 3.12 0 0 1 4.41 4.41"></svg:path>`,
})
export class UilCapsuleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
