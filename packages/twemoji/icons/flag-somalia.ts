import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagSomaliaIcon],svg[twemoji-flag-somalia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4189DD" d="M32 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#FFF" d="M19.405 16.066L18 11.741l-1.405 4.325h-4.548l3.679 2.673l-1.405 4.325L18 20.391l3.679 2.673l-1.405-4.325l3.679-2.673z"></svg:path>`,
})
export class TwemojiFlagSomaliaIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
