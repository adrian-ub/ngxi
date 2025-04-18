import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarChair2BrokenIcon],svg[solar-chair-2-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M6 15.5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Z"></svg:path><svg:path stroke-linecap="round" d="M15.79 2.496C15.04 2 14.026 2 12 2s-3.039 0-3.79.496a3 3 0 0 0-.638.566c-.582.687-.703 1.692-.944 3.704l-.09.757c-.251 2.088-.377 3.132.22 3.804c.597.673 1.648.673 3.75.673h2.983c2.103 0 3.154 0 3.75-.673c.598-.672.472-1.716.222-3.804l-.091-.757"></svg:path><svg:path d="M12 12v2"></svg:path><svg:path stroke-linecap="round" d="M12 22v-2m0 0v-2.5m0 2.5h.5c1 0 1.689 1.066 2 2M12 20h-.5c-1 0-1.689 1.066-2 2M6 15.5L5 13c-.5-1-1-1.5-3-1.5m16 4l1-2.5c.5-1 1-1.5 3-1.5"></svg:path></svg:g>`,
})
export class SolarChair2BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
