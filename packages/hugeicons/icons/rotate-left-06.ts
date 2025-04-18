import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRotateLeft06Icon],svg[hugeicons-rotate-left-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.51 10.268A1.236 1.236 0 0 1 6.2 8.53c.4-.564 1.189-.7 1.761-.306l5.527 3.814l.923.672l-.03-2.41c0-.839.74-1.491 1.585-1.399a1.42 1.42 0 0 1 1.255 1.2l.599 4.132c.136.938.204 1.407.17 1.858a4.1 4.1 0 0 1-.653 1.93c-.247.38-.587.715-1.266 1.385l-1.395 1.375a4.26 4.26 0 0 1-5.364.49l-4.047-2.73l-1.727-1.192a1.236 1.236 0 0 1-.31-1.737a1.276 1.276 0 0 1 1.761-.306m1.52-5.04l-1.38-.953a1.277 1.277 0 0 0-1.763.306c-.4.565-.261 1.342.311 1.737l1.382.954m1.45-2.043l3.11 2.145m-4.63 2.894l-1.381-.954a1.236 1.236 0 0 1-.311-1.736c.4-.564 1.19-.701 1.762-.306m-.07 2.996l1.727 1.192M5.06 12.31l3.108 2.145m1.195-9.489c.397.395 2.124.281 2.76.202m-2.76-.202c-.397-.396-.408-2.328-.328-2.963m.328 2.963c1.021-1.769 5.081-4.59 9.11-1.769c1.946 1.363 2.22 2.222 2.529 2.798" color="currentColor"></svg:path>`,
})
export class HugeiconsRotateLeft06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
