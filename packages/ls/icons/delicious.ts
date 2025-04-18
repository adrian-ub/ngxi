import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsDeliciousIcon],svg[ls-delicious-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M303 322H0V19h303zm352 0H352V19h303zM272 50H31v242h241zm31 624H0V371h303zm49 0V371h303v303zm47-272h-16v16zm41 0l-57 57v41l98-98zm82 0L383 541v41l180-180zM383 644h19l223-222v-20h-21L383 623zm101 0l141-141v-40L443 644zm82 0l59-59v-41L525 644zm41 0h18v-18z"></svg:path>`,
})
export class LsDeliciousIcon {
  readonly viewBox = input("0 0 655 674")
  readonly width = input("0.98em")
  readonly height = input("1em")
}
