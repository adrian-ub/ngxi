import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBlueprintDuotoneIcon],svg[ph-blueprint-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M232 64v136H48a24 24 0 0 1 0-48h16V64Z" opacity=".2"></svg:path><svg:path d="M232 56H72V40a8 8 0 0 0-8-8H48a32 32 0 0 0-32 32v112a32 32 0 0 0 32 32h184a8 8 0 0 0 8-8V64a8 8 0 0 0-8-8M32 64a16 16 0 0 1 16-16h8v96h-8a31.8 31.8 0 0 0-16 4.29Zm192 128H48a16 16 0 0 1 0-32h16a8 8 0 0 0 8-8V72h152Zm-120-56a8 8 0 0 0 0 16h16v8a8 8 0 0 0 16 0v-8h24v8a8 8 0 0 0 16 0v-8h16a8 8 0 0 0 0-16h-16v-16h16a8 8 0 0 0 0-16h-16v-8a8 8 0 0 0-16 0v8h-24v-8a8 8 0 0 0-16 0v8h-16a8 8 0 0 0 0 16h16v16Zm32-16h24v16h-24Z"></svg:path></svg:g>`,
})
export class PhBlueprintDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
