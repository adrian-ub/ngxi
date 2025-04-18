import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsImmoscout24Icon],svg[arcticons-immoscout24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5L5.879 17.547h2.024V43.5h32.194V17.547h2.024Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.19 27.082a5.18 5.18 0 0 1 5.045-5.24a5.215 5.215 0 0 1 3.687 8.928c-2.134 1.747-8.733 6.793-8.733 6.793h10.286m11.395 0V22.037l-8.345 10.48h10.286M7.903 17.547h32.194"></svg:path>`,
})
export class ArcticonsImmoscout24Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
