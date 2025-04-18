import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteTShirtOutlineIcon],svg[flowbite-t-shirt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M9 5h-.167a4 4 0 0 0-2.4.8L3.5 8l2 3.5L8 10v9h8v-9l2.5 1.5l2-3.5l-2.933-2.2a4 4 0 0 0-2.4-.8H15M9 5c0 1.5 1.5 3 3 3s3-1.5 3-3M9 5h6"></svg:path>`,
})
export class FlowbiteTShirtOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
