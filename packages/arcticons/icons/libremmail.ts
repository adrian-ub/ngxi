import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLibremmailIcon],svg[arcticons-libremmail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.5 14.66v18.68a4 4 0 0 0 4 4h31a4 4 0 0 0 4-4V14.66a4 4 0 0 0-4-4h-31a4 4 0 0 0-4 4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m9.485 14.854l10.96 10.96a4.966 4.966 0 0 0 7.023.01l.01-.01l11.007-11.007m-.215 18.386l-9.941-8.146M9.747 33.193l9.941-8.146"></svg:path>`,
})
export class ArcticonsLibremmailIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
