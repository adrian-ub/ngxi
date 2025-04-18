import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenEyeFill12Icon],svg[garden-eye-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="6" cy="6" r="1.5"></svg:circle><svg:path d="M11.79 5.34C11.08 4.33 9.1 2 6 2S.92 4.33.21 5.34c-.28.4-.28.93 0 1.32C.92 7.67 2.9 10 6 10s5.08-2.33 5.79-3.34c.28-.39.28-.93 0-1.32M6 8.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path></svg:g>`,
})
export class GardenEyeFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
