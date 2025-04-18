import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLocationTarget1Icon],svg[streamline-location-target-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 11.5a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9"></svg:path><svg:path d="M7 7.5a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1m0-5v-2m0 13v-2M11.5 7h2M.5 7h2"></svg:path></svg:g>`,
})
export class StreamlineLocationTarget1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
