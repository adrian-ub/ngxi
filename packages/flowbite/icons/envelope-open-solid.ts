import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteEnvelopeOpenSolidIcon],svg[flowbite-envelope-open-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m3.62 6.389l8.396 6.724l8.638-6.572l-7.69-4.29a1.98 1.98 0 0 0-1.928 0z"></svg:path><svg:path d="m22 8.053l-8.784 6.683a1.98 1.98 0 0 1-2.44-.031L2.02 7.693a1 1 0 0 0-.019.199v11.065C2 20.637 3.343 22 5 22h14c1.657 0 3-1.362 3-3.043z"></svg:path></svg:g>`,
})
export class FlowbiteEnvelopeOpenSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
