import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMopedFrontFillIcon],svg[ph-moped-front-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 40h-40.8a40 40 0 0 0-78.4 0H48a8 8 0 0 0 0 16h40.8a40 40 0 0 0 12.58 21.82A64.08 64.08 0 0 0 64 136v64a16 16 0 0 0 16 16h16a32 32 0 0 0 64 0h16a16 16 0 0 0 16-16v-64a64.08 64.08 0 0 0-37.38-58.18A40 40 0 0 0 167.2 56H208a8 8 0 0 0 0-16m-64 176a16 16 0 0 1-32 0v-48a16 16 0 0 1 32 0ZM128 72a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhMopedFrontFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
