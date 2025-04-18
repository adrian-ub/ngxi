import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeCss3Icon],svg[icomoon-free-css3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.381.758l-.537 2.686h10.934l-.342 1.735H1.496l-.53 2.686h10.933l-.61 3.063l-4.406 1.46l-3.819-1.46l.261-1.329H.639L0 12.823l6.316 2.417l7.281-2.417L16 .757z"></svg:path>`,
})
export class IcomoonFreeCss3Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
