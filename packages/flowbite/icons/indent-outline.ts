import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteIndentOutlineIcon],svg[flowbite-indent-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 6h12M6 18h12m-5-8h5m-5 4h5M6 9v6l3.5-3z"></svg:path>`,
})
export class FlowbiteIndentOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
