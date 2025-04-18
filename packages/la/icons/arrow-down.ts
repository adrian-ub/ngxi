import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laArrowDownIcon],svg[la-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4v20.063L8.219 17.28L6.78 18.72l8.5 8.5l.719.687l.719-.687l8.5-8.5l-1.438-1.438L17 24.063V4z"></svg:path>`,
})
export class LaArrowDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
