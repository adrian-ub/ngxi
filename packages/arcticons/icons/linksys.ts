import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLinksysIcon],svg[arcticons-linksys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.564 6.999V42.5h31.557"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.398 6.999V31.98h19.723M35.742 5.5c2.59 0 4.694 2.104 4.694 4.694s-2.104 4.694-4.694 4.694s-4.694-2.104-4.694-4.694S33.15 5.5 35.742 5.5"></svg:path>`,
})
export class ArcticonsLinksysIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
