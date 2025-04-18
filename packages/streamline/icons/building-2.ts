import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBuilding2Icon],svg[streamline-building-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.5 13.5h-8V4l4-3.5l4 3.5zm0 0h5v-7h-5m-4 7v-2M3 8.5h3m-3-3h3"></svg:path>`,
})
export class StreamlineBuilding2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
