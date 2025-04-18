import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerUserSquareRoundedIcon],svg[tabler-user-square-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 13a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9s-9-1.8-9-9s1.8-9 9-9"></svg:path><svg:path d="M6 20.05V20a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v.05"></svg:path></svg:g>`,
})
export class TablerUserSquareRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
