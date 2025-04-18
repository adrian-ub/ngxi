import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTouch05Icon],svg[hugeicons-touch-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.99 22.001l-.047-.772l-.175-.745c-.552-2.186-1.324-2.428-2.552-3.994c-.555-.707-1.556-1.667-2.503-3.02c-.632-.903.154-3.058 2.075-2.433c.32.104.588.312.826.541l1.863 1.891c-.015-2.532.02-8.515-.02-10.097c-.042-1.582 2.827-2.091 2.997.072v5.594m0 0v.937m0-.937c.938-1.19 2.714-1.232 2.972.76m0 0c.042.324.045.703 0 1.14m0-1.14c.474-1.392 2.633-.848 3.047.771m0 0c.099.384-.04.886 0 1.399m0-1.399c.27-.78 3.293-.74 3.01 2.275l-.036 2.705c0 1.605-.214 2.35-.827 3.138c-.226.292-.54.583-.759.903a2.1 2.1 0 0 0-.329.837c-.066.416-.075.991-.055 1.542" color="currentColor"></svg:path>`,
})
export class HugeiconsTouch05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
