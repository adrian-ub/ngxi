import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundMobileOffIcon],svg[ic-round-mobile-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 16.44L3.61 3.05A.996.996 0 1 0 2.2 4.46L5 7.27V21c0 1.1.9 2 2 2h10c1.02 0 1.85-.77 1.98-1.75L20 22.27a.996.996 0 1 0 1.41-1.41L19 18.44zM7 19V9.27L16.73 19zM17 5v8.61l2 2V3c0-1.1-.9-2-2-2H7c-.71 0-1.33.37-1.68.93L8.39 5z"></svg:path>`,
})
export class IcRoundMobileOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
