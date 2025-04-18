import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMemberOfFillIcon],svg[ph-member-of-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-32 88a8 8 0 0 1 0 16H80.68A48.07 48.07 0 0 0 128 176h48a8 8 0 0 1 0 16h-48a64 64 0 0 1 0-128h48a8 8 0 0 1 0 16h-48a48.07 48.07 0 0 0-47.32 40Z"></svg:path>`,
})
export class PhMemberOfFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
