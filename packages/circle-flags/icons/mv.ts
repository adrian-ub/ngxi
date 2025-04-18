import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsMvIcon],svg[circle-flags-mv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsMv0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsMv0)"><svg:path fill="#d80027" d="M0 0h512v512H0z"></svg:path><svg:path fill="#6da544" d="M89 133.6h334v244.8H89z"></svg:path><svg:path fill="#eee" d="M297.2 328.3a72.3 72.3 0 1 1 34.4-136a89 89 0 1 0 0 127.3a72 72 0 0 1-34.4 8.7"></svg:path></svg:g>`,
})
export class CircleFlagsMvIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
