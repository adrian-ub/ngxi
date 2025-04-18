import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkGeopointActiveIcon],svg[nrk-geopoint-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.556 23h-1.1l-1.008-1.217c-1.358-1.64-2.932-3.739-4.177-5.916C5.063 13.755 4 11.293 4 9c0-4.605 3.395-8 8-8s8 3.395 8 8c0 2.305-1.096 4.768-2.313 6.867c-1.256 2.166-2.83 4.258-4.137 5.89zM16 9a4 4 0 1 1-8 0a4 4 0 0 1 8 0" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class NrkGeopointActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
