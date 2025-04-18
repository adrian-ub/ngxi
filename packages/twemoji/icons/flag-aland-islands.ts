import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagAlandIslandsIcon],svg[twemoji-flag-aland-islands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFCE00" d="M18 5h-2v11h20v-2H18zm-2 17v9h2v-9h18v-2H16zm-3-2H0v2h11v9h2v-9zm0-6V5h-2v9H0v2h13z"></svg:path><svg:path fill="#D21034" d="M16 5h-3v11H0v4h13v11h3V20h20v-4H16z"></svg:path><svg:path fill="#0053A5" d="M18 22v9h14a4 4 0 0 0 4-4v-5zM0 22v5a4 4 0 0 0 4 4h7v-9zM11 5H4a4 4 0 0 0-4 4v5h11zm21 0H18v9h18V9a4 4 0 0 0-4-4"></svg:path>`,
})
export class TwemojiFlagAlandIslandsIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
