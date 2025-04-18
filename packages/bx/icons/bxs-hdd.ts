import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsHddIcon],svg[bx-bxs-hdd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 13H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-4 5h-2v-2h2v2zm4 0h-2v-2h2v2zm.775-7H21l-1.652-7.434A2 2 0 0 0 17.396 2H6.604a2 2 0 0 0-1.952 1.566L3 11h17.775z" fill="currentColor"></svg:path>`,
})
export class BxBxsHddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
