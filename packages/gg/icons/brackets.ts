import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggBracketsIcon],svg[gg-brackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11 7v2H9v6h2v2H7V7zm4 8h-2v2h4V7h-4v2h2z"></svg:path><svg:path fill-rule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgBracketsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
