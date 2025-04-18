import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowULeftUpIcon],svg[ph-arrow-u-left-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 80v88a64 64 0 0 1-128 0V51.31L45.66 85.66a8 8 0 0 1-11.32-11.32l48-48a8 8 0 0 1 11.32 0l48 48a8 8 0 0 1-11.32 11.32L96 51.31V168a48 48 0 0 0 96 0V80a8 8 0 0 1 16 0"></svg:path>`,
})
export class PhArrowULeftUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
