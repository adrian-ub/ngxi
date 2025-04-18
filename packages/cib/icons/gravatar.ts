import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibGravatarIcon],svg[cib-gravatar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 0a3.2 3.2 0 0 0-3.197 3.197v11.204a3.198 3.198 0 0 0 6.394 0V6.948A9.6 9.6 0 0 1 25.598 16c0 5.297-4.301 9.599-9.599 9.599S6.4 21.303 6.4 16a9.55 9.55 0 0 1 2.812-6.787a3.204 3.204 0 0 0-4.531-4.531A16 16 0 0 0-.002 15.999c0 8.839 7.161 16 16 16s16-7.161 16-16s-7.161-16-16-16z"></svg:path>`,
})
export class CibGravatarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
