import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsWordpressIcon],svg[meteor-icons-wordpress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h5M2.8 8L8 21l4-10M9 8h5m-3.2 0L16 21l3.2-7.5C25 0 14 2 17 7s2.2 6.5 2.2 6.5M8 21l4-10"></svg:path>`,
})
export class MeteorIconsWordpressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
