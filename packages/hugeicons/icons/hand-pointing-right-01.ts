import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHandPointingRight01Icon],svg[hugeicons-hand-pointing-right-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 8.834h.949a3 3 0 0 0 1.792-.595L9.643 4.58c.566-.421 1.267-.758 1.915-.48c1.049.451 1.73 1.723.158 3.28l-1.71 1.598H20.43c2.044.056 2.145 3.345 0 3.486h-5.94c.191 1.48-.852 8.454-5.272 7.437l-.634-.143c-.918-.206-2.556-.814-3.513-1.485c-.997-.697-1.99-.451-3.07-.451" color="currentColor"></svg:path>`,
})
export class HugeiconsHandPointingRight01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
