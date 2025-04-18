import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCovertIcon],svg[lets-icons-covert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:path stroke-linecap="round" d="M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"></svg:path><svg:path d="m19 3l-3.7 4.625a1 1 0 0 1-.78.375H9.48a1 1 0 0 1-.78-.375L5 3m14 18l-3.7-4.625a1 1 0 0 0-.78-.375H9.48a1 1 0 0 0-.78.375L5 21"></svg:path><svg:path stroke-linecap="round" d="M12 13v3"></svg:path></svg:g>`,
})
export class LetsIconsCovertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
