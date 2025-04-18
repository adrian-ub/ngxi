import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketCheckOut01Icon],svg[hugeicons-shopping-basket-check-out-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 22H9.622c-2.348 0-3.522 0-4.336-.706c-.815-.705-1.014-1.895-1.413-4.275L2.669 9.84c-.182-1.085-.273-1.627.019-1.983c.291-.356.827-.356 1.898-.356h14.828c1.071 0 1.607 0 1.898.356c.292.356.2.898.019 1.984l-.279 1.66M17.5 7.5a5.5 5.5 0 1 0-11 0m10 12c.491.506 1.8 2.5 2.5 2.5m2.5-2.5c-.491.506-1.8 2.5-2.5 2.5m0 0v-8" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasketCheckOut01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
