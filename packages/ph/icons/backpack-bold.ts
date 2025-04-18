import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBackpackBoldIcon],svg[ph-backpack-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M172 48.55V36a28 28 0 0 0-28-28h-32a28 28 0 0 0-28 28v12.55A60.08 60.08 0 0 0 32 108v112a20 20 0 0 0 20 20h152a20 20 0 0 0 20-20V108a60.08 60.08 0 0 0-52-59.45M112 32h32a4 4 0 0 1 4 4v12h-40V36a4 4 0 0 1 4-4m48 128H96v-8a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4Zm-64 24h64v32H96Zm104 32h-16v-64a28 28 0 0 0-28-28h-56a28 28 0 0 0-28 28v64H56V108a36 36 0 0 1 36-36h72a36 36 0 0 1 36 36Zm-40-116a12 12 0 0 1-12 12h-40a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhBackpackBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
