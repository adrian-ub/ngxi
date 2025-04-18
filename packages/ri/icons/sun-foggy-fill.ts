import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSunFoggyFillIcon],svg[ri-sun-foggy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.341 14A6 6 0 1 1 12 18v-4zM6 20h9v2H6zm-5-9h3v2H1zm1 5h8v2H2zm9-15h2v3h-2zM3.515 4.929l1.414-1.414L7.05 5.636L5.636 7.05zM16.95 18.364l1.414-1.414l2.121 2.121l-1.414 1.414zm2.121-14.85l1.414 1.415l-2.121 2.121l-1.414-1.414zM23 11v2h-3v-2z"></svg:path>`,
})
export class RiSunFoggyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
