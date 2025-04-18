import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopMagnetCircleFilledIcon],svg[pepicons-pop-magnet-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopMagnetCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M10.293 4.393a1 1 0 0 1 1.414 0l3.536 3.536a1 1 0 0 1 0 1.414l-4.95 4.95a1 1 0 1 0 1.414 1.414l4.95-4.95a1 1 0 0 1 1.414 0l3.536 3.536a1 1 0 0 1 0 1.414l-4.95 4.95A8 8 0 1 1 5.343 9.343zM11 6.515l-4.243 4.242a6 6 0 1 0 8.486 8.486L19.485 15l-2.121-2.121l-4.243 4.242A3 3 0 1 1 8.88 12.88l4.242-4.243z"></svg:path><svg:path d="m10.293 11.464l-2.121-2.12l1.414-1.415l2.121 2.121zm6.364 6.364l-2.121-2.12l1.414-1.415l2.121 2.121zm.972-8.4a1 1 0 0 1-.558-1.3l1.35-3.375l1.559.52l.819-1.706a1 1 0 0 1 1.803.866L21.02 7.727l-1.442-.48l-.65 1.624a1 1 0 0 1-1.3.557"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopMagnetCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopMagnetCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
