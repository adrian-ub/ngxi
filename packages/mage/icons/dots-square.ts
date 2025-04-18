import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDotsSquareIcon],svg[mage-dots-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 7.849a.656.656 0 1 0 0-1.311a.656.656 0 0 0 0 1.31m0 4.808a.656.656 0 1 0 0-1.312a.656.656 0 0 0 0 1.312m0 4.806a.656.656 0 1 0 0-1.31a.656.656 0 0 0 0 1.31"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageDotsSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
