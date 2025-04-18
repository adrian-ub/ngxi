import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDoorOpenLineIcon],svg[ri-door-open-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.998 21v-2h2V4.835a1 1 0 0 1 .821-.984l9.472-1.722a.6.6 0 0 1 .707.59v1.28l4 .001a1 1 0 0 1 1 1v14h2v2h-4V6h-3v15zm11-16.603l-7 1.272V19h7zm-1 6.603v2h-2v-2z"></svg:path>`,
})
export class RiDoorOpenLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
