import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteEnvelopeOpenOutlineIcon],svg[flowbite-envelope-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 8v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8m18 0l-8.029-4.46a2 2 0 0 0-1.942 0L3 8m18 0l-9 6.5L3 8"></svg:path>`,
})
export class FlowbiteEnvelopeOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
