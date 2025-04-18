import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7VideocamCircleIcon],svg[f7-videocam-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4c13.255 0 24 10.745 24 24S41.255 52 28 52S4 41.255 4 28S14.745 4 28 4m0 4C16.954 8 8 16.954 8 28s8.954 20 20 20s20-8.954 20-20S39.046 8 28 8m2.77 10l.207.005a4.29 4.29 0 0 1 4.077 4.076l.005.208v11.03l-.005.207a4.29 4.29 0 0 1-4.077 4.077l-.208.005H17.29l-.208-.005a4.29 4.29 0 0 1-4.076-4.077L13 33.318V22.29l.005-.208a4.29 4.29 0 0 1 4.076-4.076L17.29 18zm10.239 1.833l.157.006a1.99 1.99 0 0 1 1.816 1.717l.015.156l.003.113V33.87l-.008.175a1.99 1.99 0 0 1-3.027 1.521l-.143-.097l-.095-.075l-3.443-2.895v-9.26l3.431-2.93l.144-.111c.247-.175.53-.29.828-.34l.18-.02z"></svg:path>`,
})
export class F7VideocamCircleIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
