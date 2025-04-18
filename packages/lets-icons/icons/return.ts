import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsReturnIcon],svg[lets-icons-return-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 10l.707.707l.707-.707l-.707-.707zM3 18a1 1 0 1 0 2 0zm12.707-2.293l5-5l-1.414-1.414l-5 5zm5-6.414l-5-5l-1.414 1.414l5 5zM20 9H10v2h10zM3 16v2h2v-2zm7-7a7 7 0 0 0-7 7h2a5 5 0 0 1 5-5z"></svg:path>`,
})
export class LetsIconsReturnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
