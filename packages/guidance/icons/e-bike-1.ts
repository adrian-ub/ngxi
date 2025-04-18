import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceEBike1Icon],svg[guidance-e-bike-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M16.5 5.5h-9V6c0 5-3.5 6.5-3.5 6.5m7.5-.5a5 5 0 0 0-5-5a6 6 0 0 0-6 6a9 9 0 0 0 9 9h.5m0 0c0 1 .5 1.5.5 1.5H13M10 22c0-1 .5-1.5.5-1.5H13m0 0v3m0-3h2m-2 3h2M11.498 12a5 5 0 0 1-5 5m0 0a4.98 4.98 0 0 1-3-1m3 1a5 5 0 0 1-2.098-.46M5 3h4M20 .5h-3.5V6c0 5 3.5 6.5 3.5 6.5M18.5 17a5 5 0 1 1 0-10a5 5 0 0 1 0 10Z"></svg:path>`,
})
export class GuidanceEBike1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
