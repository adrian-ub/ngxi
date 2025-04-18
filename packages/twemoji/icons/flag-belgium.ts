import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagBelgiumIcon],svg[twemoji-flag-belgium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#141414" d="M7 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h6V5z"></svg:path><svg:path fill="#FDDA24" d="M13 5h10v26H13z"></svg:path><svg:path fill="#EF3340" d="M29 5h-6v26h6a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4"></svg:path>`,
})
export class TwemojiFlagBelgiumIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
