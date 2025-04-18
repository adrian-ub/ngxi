import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laArrowsAltHIcon],svg[la-arrows-alt-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.281 6.781l-8.5 8.5L.094 16l.687.719l8.5 8.5l1.438-1.438L3.938 17h24.125l-6.782 6.781l1.438 1.438l8.5-8.5l.687-.719l-.687-.719l-8.5-8.5L21.28 8.22L28.063 15H3.938l6.78-6.781z"></svg:path>`,
})
export class LaArrowsAltHIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
