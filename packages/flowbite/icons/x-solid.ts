import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteXSolidIcon],svg[flowbite-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.795 10.533L20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22zm-2.38 2.95L9.97 11.464L4.36 3.627h2.31l4.528 6.317l1.443 2.02l6.018 8.409h-2.31z"></svg:path>`,
})
export class FlowbiteXSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
