import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laStumbleuponIcon],svg[la-stumbleupon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c-3.859 0-7 3.14-7 7v9.5c0 .827-.673 1.5-1.5 1.5S6 21.327 6 20.5V16H1v4.5C1 24.084 3.916 27 7.5 27s6.5-2.916 6.5-6.5V11c0-1.103.897-2 2-2s2 .897 2 2v1.922l1.889.879L23 12.877V11c0-3.86-3.141-7-7-7m10 12v4.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5v-4.494l-3.348.996L18 16.23v4.27c0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5V16z"></svg:path>`,
})
export class LaStumbleuponIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
