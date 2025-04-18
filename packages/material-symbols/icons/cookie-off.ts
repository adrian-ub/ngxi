import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCookieOffIcon],svg[material-symbols-cookie-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 15q.625 0 1.063-.437T10 13.5t-.437-1.062T8.5 12t-1.062.438T7 13.5t.438 1.063T8.5 15m11.975 8.3l-2.95-2.95q-1.2.8-2.587 1.225T12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12q0-1.55.425-2.937T3.65 6.475L.675 3.5L2.1 2.075l19.8 19.8zm-.1-5.8L6.5 3.625q1.525-1.05 3.438-1.463t4.137.038q-.225 1.125.15 2.113t1.125 1.662t1.775.925t2.15-.125q-.775 1.725.275 2.95T21.95 11q.2 1.8-.238 3.45t-1.337 3.05"></svg:path>`,
})
export class MaterialSymbolsCookieOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
