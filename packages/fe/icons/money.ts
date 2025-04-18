import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feMoneyIcon],svg[fe-money-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m14 2H6a2 2 0 0 1-2 2v6a2 2 0 0 1 2 2h12a2 2 0 0 1 2-2V9a2 2 0 0 1-2-2M8 9h2v6H8zm6 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class FeMoneyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
