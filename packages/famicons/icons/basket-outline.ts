import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsBasketOutlineIcon],svg[famicons-basket-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="M68.4 192A20.38 20.38 0 0 0 48 212.2a17.9 17.9 0 0 0 .8 5.5L100.5 400a40.46 40.46 0 0 0 39.1 29.5h232.8a40.88 40.88 0 0 0 39.3-29.5l51.7-182.3l.6-5.5a20.38 20.38 0 0 0-20.4-20.2zm193.32 160.07A42.07 42.07 0 1 1 304 310a42.27 42.27 0 0 1-42.28 42.07Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" d="m160 192l96-128l96 128"></svg:path>`,
})
export class FamiconsBasketOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
