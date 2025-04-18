import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phListBulletsThinIcon],svg[ph-list-bullets-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 64a4 4 0 0 1 4-4h128a4 4 0 0 1 0 8H88a4 4 0 0 1-4-4m132 60H88a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8m0 64H88a4 4 0 0 0 0 8h128a4 4 0 0 0 0-8M44 120a8 8 0 1 0 8 8a8 8 0 0 0-8-8m0-64a8 8 0 1 0 8 8a8 8 0 0 0-8-8m0 128a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path>`,
})
export class PhListBulletsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
