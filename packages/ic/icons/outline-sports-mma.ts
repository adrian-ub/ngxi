import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineSportsMmaIcon],svg[ic-outline-sports-mma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-3H7zM18 7c-.55 0-1 .45-1 1V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v5.8c0 .13.01.26.04.39l.8 4c.09.47.5.8.98.8H17c.55 0 1.09-.44 1.2-.98l.77-3.83c.02-.12.03-.25.03-.38V8c0-.55-.45-1-1-1m-1 3.6c0 .13-.64 3.4-.64 3.4H7.64S7 10.74 7 10.6V5h8v5h2z"></svg:path><svg:path fill="currentColor" d="M8 7h6v3H8z"></svg:path>`,
})
export class IcOutlineSportsMmaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
