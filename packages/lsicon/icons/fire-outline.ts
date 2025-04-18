import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconFireOutlineIcon],svg[lsicon-fire-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M13 9.625c0 2.692-2.239 4.875-5 4.875s-5-2.183-5-4.875C3 5.292 5.5 5.833 5.5 1.5c3.333 2.167 2.5 5 2.5 5s1.5-1 1.5-3C12.833 6.208 13 8.376 13 9.625Z"></svg:path>`,
})
export class LsiconFireOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
