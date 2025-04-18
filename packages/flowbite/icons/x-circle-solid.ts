import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteXCircleSolidIcon],svg[flowbite-x-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0a10 10 0 0 1-20 0m7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3l-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3l2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6z" clip-rule="evenodd"></svg:path>`,
})
export class FlowbiteXCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
