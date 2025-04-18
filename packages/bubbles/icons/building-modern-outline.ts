import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesBuildingModernOutlineIcon],svg[bubbles-building-modern-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6.5 12.434a.5.5 0 0 0-.777-.416l-5 3.334a.5.5 0 0 0-.223.416V23a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5zm10-4.727a.5.5 0 0 0-.146-.353L12.5 3.5L8.646 7.354a.5.5 0 0 0-.146.353V23a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5zm-4-4.207v-3m6 13l2.146-2.146a.5.5 0 0 1 .708 0L23.5 13.5V23a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zm0 0h5m-5 2h5m-5 2h5m-5 2h5m-5 2h5m-21 2V17m2 6.5V17"></svg:path><svg:path d="m16.443 7.476l-7.819.001L16.5 11.5l-8 4l8 4l-7.8 3.9"></svg:path></svg:g>`,
})
export class BubblesBuildingModernOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
