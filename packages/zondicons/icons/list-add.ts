import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsListAddIcon],svg[zondicons-list-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9h-3v2h3v3h2v-3h3V9h-3V6h-2zM0 3h10v2H0zm0 8h10v2H0zm0-4h10v2H0zm0 8h10v2H0z"></svg:path>`,
})
export class ZondiconsListAddIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
