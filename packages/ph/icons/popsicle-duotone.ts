import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPopsicleDuotoneIcon],svg[ph-popsicle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 80v96a8 8 0 0 1-8 8H72a8 8 0 0 1-8-8V80a64 64 0 0 1 64-64a64 64 0 0 1 64 64" opacity=".2"></svg:path><svg:path d="M128 8a72.08 72.08 0 0 0-72 72v96a16 16 0 0 0 16 16h32v40a24 24 0 0 0 48 0v-40h32a16 16 0 0 0 16-16V80a72.08 72.08 0 0 0-72-72m8 224a8 8 0 0 1-16 0v-40h16Zm48-56H72V80a56 56 0 0 1 112 0zM120 72v80a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0m32 0v80a8 8 0 0 1-16 0V72a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhPopsicleDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
