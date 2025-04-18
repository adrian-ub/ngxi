import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaPeopleFillIcon],svg[eva-people-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 11a4 4 0 1 0-4-4a4 4 0 0 0 4 4m8 2a3 3 0 1 0-3-3a3 3 0 0 0 3 3m4 7a1 1 0 0 0 1-1a5 5 0 0 0-8.06-3.95A7 7 0 0 0 2 20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1"></svg:path>`,
})
export class EvaPeopleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
