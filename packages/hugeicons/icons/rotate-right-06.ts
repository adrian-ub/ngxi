import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateRight06Icon],svg[hugeicons-rotate-right-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.49 10.268a1.236 1.236 0 0 0 .31-1.737a1.277 1.277 0 0 0-1.761-.306l-5.527 3.814l-.923.672l.03-2.41c0-.839-.74-1.491-1.585-1.399a1.42 1.42 0 0 0-1.255 1.2l-.599 4.132c-.136.938-.204 1.407-.17 1.858c.052.686.276 1.35.653 1.93c.247.38.587.715 1.266 1.385l1.395 1.375a4.26 4.26 0 0 0 5.364.49l4.047-2.73l1.727-1.192a1.236 1.236 0 0 0 .31-1.737a1.277 1.277 0 0 0-1.761-.306m-1.52-5.04l1.38-.953a1.277 1.277 0 0 1 1.763.306c.4.565.261 1.342-.311 1.737l-1.382.954m-1.45-2.043l-3.11 2.145m4.63 2.894l1.381-.954a1.236 1.236 0 0 0 .311-1.736a1.277 1.277 0 0 0-1.762-.306m.07 2.996l-1.727 1.192m1.657-4.188l-3.108 2.145m-1.196-9.49c-.397.395-2.124.281-2.76.202m2.76-.202c.396-.396.408-2.328.328-2.963m-.328 2.963c-1.021-1.769-5.081-4.59-9.11-1.769C3.582 4.56 3.308 5.42 2.999 5.995" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateRight06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
