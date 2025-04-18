import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonInformationSquareIcon],svg[iconamoon-information-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-linecap="round" stroke-width="2" d="M4 4.001h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-width="3" d="M12 8h.01v.01H12z"></svg:path><svg:path stroke-linecap="round" stroke-width="2" d="M12 12v4"></svg:path></svg:g>`,
})
export class IconamoonInformationSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
