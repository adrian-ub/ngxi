import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phUserGearBoldIcon],svg[ph-user-gear-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148.5 156.53a72 72 0 1 0-89 0a124 124 0 0 0-48.69 35.75a12 12 0 0 0 18.38 15.44C48.54 184.69 75.11 172 104 172c37 0 61.12 19.42 74.81 35.72a12 12 0 1 0 18.38-15.44a124 124 0 0 0-48.69-35.75M56 100a48 48 0 1 1 48 48a48.05 48.05 0 0 1-48-48m190.53 40l-7.11 2.31l4.39 6.05a12 12 0 1 1-19.41 14.11l-4.4-6.06l-4.4 6.06a12 12 0 1 1-19.41-14.11l4.39-6.05l-7.11-2.31a12 12 0 1 1 7.41-22.83l7.12 2.31V112a12 12 0 0 1 24 0v7.48l7.12-2.31a12 12 0 1 1 7.41 22.83"></svg:path>`,
})
export class PhUserGearBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
