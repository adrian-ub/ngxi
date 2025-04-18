import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowsShrinkHIcon],svg[gg-arrows-shrink-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7h2v10H1zm7.448.757l1.414 1.415L8.033 11h7.933l-1.828-1.828l1.414-1.415L19.795 12l-4.243 4.243l-1.414-1.415L15.966 13H8.034l1.828 1.828l-1.414 1.415L4.205 12zM23 7h-2v10h2z"></svg:path>`,
})
export class GgArrowsShrinkHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
