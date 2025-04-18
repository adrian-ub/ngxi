import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTimeFillIcon],svg[lets-icons-time-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m1-14.5a1 1 0 1 0-2 0v5.25c0 .69.56 1.25 1.25 1.25h3.25a1 1 0 1 0 0-2H13z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsTimeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
