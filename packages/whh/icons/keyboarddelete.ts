import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhKeyboarddeleteIcon],svg[whh-keyboarddelete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 641H320v-1q-25 1-43-17L18 364Q0 346 0 320.5T18 278L277 19q20-20 48-18h635q27 0 45.5 19t18.5 45v512q0 27-18.5 45.5T960 641m-77-440q12-13 12-30t-12-29.5t-29.5-12.5t-29.5 13L704 262L584 142q-13-13-30-13t-29.5 12.5T512 171t13 30l120 120l-120 120q-13 13-13 30t12.5 29t29.5 12t30-12l120-120l120 120q12 12 29.5 12t29.5-12t12-29t-12-30L763 321z"></svg:path>`,
})
export class WhhKeyboarddeleteIcon {
  readonly viewBox = input("0 0 1024 641")
  readonly width = input("1.6em")
  readonly height = input("1em")
}
