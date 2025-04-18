import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riKnifeFillIcon],svg[ri-knife-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.374 19.44a1.5 1.5 0 1 1-2.121 2.12l-4.596-4.595L12.12 20.5l-7.778-7.778A8 8 0 0 1 4.17 1.587l.173-.179z"></svg:path>`,
})
export class RiKnifeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
