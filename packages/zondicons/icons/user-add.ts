import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsUserAddIcon],svg[zondicons-user-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6H0v2h2v2h2V8h2V6H4V4H2zm7 0a3 3 0 0 1 6 0v2a3 3 0 0 1-6 0zm11 9.14A15.93 15.93 0 0 0 12 13c-2.91 0-5.65.78-8 2.14V18h16z"></svg:path>`,
})
export class ZondiconsUserAddIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
