import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMemberOfBoldIcon],svg[ph-member-of-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 140H61.08A68.1 68.1 0 0 0 128 196h72a12 12 0 0 1 0 24h-72a92 92 0 0 1 0-184h72a12 12 0 0 1 0 24h-72a68.1 68.1 0 0 0-66.92 56H200a12 12 0 0 1 0 24"></svg:path>`,
})
export class PhMemberOfBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
