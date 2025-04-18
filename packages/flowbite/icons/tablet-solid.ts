import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteTabletSolidIcon],svg[flowbite-tablet-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 4c0-.975.718-2 1.875-2h12.25C19.282 2 20 3.025 20 4v16c0 .975-.718 2-1.875 2H5.875C4.718 22 4 20.975 4 20zm7 13a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class FlowbiteTabletSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
