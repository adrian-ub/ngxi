import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamEggsFIcon],svg[jam-eggs-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 17a6 6 0 0 1-6-6c0-3.314 3-9 6-9s6 5.686 6 9a6 6 0 0 1-6 6m6.612-2.161A5.98 5.98 0 0 0 14 11c0-2.518-1.732-6.405-3.88-8.127C11.213 1.227 12.607 0 14 0c3 0 6 5.686 6 9a6 6 0 0 1-7.388 5.839"></svg:path>`,
})
export class JamEggsFIcon {
  readonly viewBox = input("-2 -3.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
