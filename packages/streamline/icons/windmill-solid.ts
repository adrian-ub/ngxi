import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineWindmillSolidIcon],svg[streamline-windmill-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 4.531a1.5 1.5 0 0 0-1.5-1.5H3.062a1.5 1.5 0 0 0-1.5 1.5V5H6.5zM3.537 9.605C3.232 10.895 3 12.277 3 13.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5c0-1.426-.316-3.07-.694-4.531H9a2.5 2.5 0 0 1-1.5-.5v2.969a.5.5 0 0 1-.5.5h-.969a2.5 2.5 0 0 1-2.494-2.333M9.469 3.5a1.5 1.5 0 0 1-1.5 1.5H7.5V.063h.469a1.5 1.5 0 0 1 1.5 1.5zM6.5 6h-.469a1.5 1.5 0 0 0-1.5 1.5v1.938a1.5 1.5 0 0 0 1.5 1.5H6.5zM9 7.969a1.5 1.5 0 0 1-1.5-1.5V6h4.937v.469a1.5 1.5 0 0 1-1.5 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineWindmillSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
