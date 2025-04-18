import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDrink01Icon],svg[carbon-drink-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 10.414l3-3L24.586 6l-3.293 3.293A1 1 0 0 0 21 10v4h-7.074l1.143 16h8.862l1.143-16H23zM22.07 28h-5.14l-.856-12h6.852z"></svg:path><svg:path fill="currentColor" d="M15 1h-5a1 1 0 0 0-1 1v7.37c-1.067.606-3 2.178-3 5.63v14a1 1 0 0 0 1 1h5v-2H8V15c0-3.754 3-4.28 3-4.28V3h3v7h2V2a1 1 0 0 0-1-1"></svg:path>`,
})
export class CarbonDrink01Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
