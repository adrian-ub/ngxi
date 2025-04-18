import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUserTimeFilledIcon],svg[tdesign-user-time-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M18 12.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11m1 7.914l-2-2v-2.662h2v1.834L20.414 19z"></svg:path><svg:path fill="currentColor" d="M12.255 14A6.97 6.97 0 0 0 11 18c0 1.487.464 2.866 1.255 4H2v-2a6 6 0 0 1 6-6z"></svg:path>`,
})
export class TdesignUserTimeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
