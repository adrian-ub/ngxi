import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsTagIcon],svg[zondicons-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 10V2l2-2h8l10 10l-10 10zm4.5-4a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class ZondiconsTagIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
