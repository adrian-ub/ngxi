import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceForbiddenIcon],svg[guidance-forbidden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M.5 12C.5 5.649 5.649.5 12 .5S23.5 5.649 23.5 12S18.351 23.5 12 23.5S.5 18.351.5 12Z"></svg:path><svg:path d="M4.5 14h15v-.25l-.068-.272a6.1 6.1 0 0 1 0-2.956l.068-.272V10h-15v.25l.068.272a6.1 6.1 0 0 1 0 2.956l-.068.272z"></svg:path></svg:g>`,
})
export class GuidanceForbiddenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
