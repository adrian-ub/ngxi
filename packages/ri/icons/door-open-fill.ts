import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDoorOpenFillIcon],svg[ri-door-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.998 21v-2h2V4.835a1 1 0 0 1 .821-.984l9.472-1.722a.6.6 0 0 1 .707.59v1.28l4 .001a1 1 0 0 1 1 1v14h2v2h-4V6h-3v15zm10-10h-2v2h2z"></svg:path>`,
})
export class RiDoorOpenFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
