import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsShoppingBasketSecure03Icon],svg[hugeicons-shopping-basket-secure-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11.5 8h8.696c.625 0 .937 0 1.166.1c1.012.447.56 1.57.39 2.378c-.033.154-.133.247-.252.323M7.5 8H3.804c-.625 0-.937 0-1.166.1c-1.012.447-.56 1.57-.39 2.378a.49.49 0 0 0 .27.335a1.93 1.93 0 0 1 1.09 1.4l.593 3.375c.26 1.485.35 3.606 1.65 4.652c.955.76 2.33.76 5.081.76H12m5.5-8c-1.267 0-2.088.808-3.06 1.102c-.394.12-.592.18-.672.264s-.103.207-.15.454c-.5 2.638.594 5.078 3.204 6.027c.28.102.42.153.679.153c.257 0 .398-.051.678-.153c2.61-.95 3.704-3.389 3.203-6.027c-.047-.247-.07-.37-.15-.454s-.278-.144-.673-.264C19.588 13.808 18.766 13 17.5 13m-11-2L10 3m5 0l2.5 5" color="currentColor"></svg:path>`,
})
export class HugeiconsShoppingBasketSecure03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
