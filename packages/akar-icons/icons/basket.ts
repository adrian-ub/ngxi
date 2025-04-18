import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsBasketIcon],svg[akar-icons-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:path stroke-linejoin="round" d="M2.31 11.243A1 1 0 0 1 3.28 10h17.44a1 1 0 0 1 .97 1.242l-1.811 7.243A2 2 0 0 1 17.939 20H6.061a2 2 0 0 1-1.94-1.515z"></svg:path><svg:path stroke-linecap="round" d="M9 14v2m6-2v2m-9-6l4-6m8 6l-4-6"></svg:path></svg:g>`,
})
export class AkarIconsBasketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
