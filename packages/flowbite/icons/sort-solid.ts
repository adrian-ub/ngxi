import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteSortSolidIcon],svg[flowbite-sort-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path d="M8 19.5V10m8-5.5V14"></svg:path><svg:path stroke-linejoin="round" d="m5 17l3 3l3-3m8-10l-3-3l-3 3"></svg:path></svg:g>`,
})
export class FlowbiteSortSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
