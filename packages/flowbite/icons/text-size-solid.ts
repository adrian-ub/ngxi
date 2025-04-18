import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteTextSizeSolidIcon],svg[flowbite-text-size-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 5c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v1.2a1 1 0 1 1-2 0V6H9v12h2a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h2V6H4v.2a1 1 0 1 1-2 0zm10 6c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v1.2a1 1 0 1 1-2 0V12h-2v6h.5a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2h.5v-6h-2v.2a1 1 0 1 1-2 0z" clip-rule="evenodd"></svg:path>`,
})
export class FlowbiteTextSizeSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
