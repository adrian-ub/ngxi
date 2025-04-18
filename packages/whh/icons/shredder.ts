import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhShredderIcon],svg[whh-shredder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 768V640q0-27-19-45.5T768 576H192q-26 0-45 18.5T128 640v128q-53 0-90.5-37.5T0 640V384q0-53 37.5-90.5T128 256v128q0 27 19 45.5t45 18.5h576q26 0 45-18.5t19-45.5V256q53 0 90.5 37.5T960 384v256q0 53-37.5 90.5T832 768m-96-384H224q-13 0-22.5-9.5T192 352V32q0-13 9.5-22.5T224 0h512q13 0 22.5 9.5T768 32v320q0 13-9.5 22.5T736 384M224 640q13 0 22.5 9t9.5 22v321q0 13-9.5 22.5T224 1024t-22.5-9.5T192 992V671q0-13 9.5-22t22.5-9m128 0q14 0 23 9t9 22v257q0 13-9 22.5t-23 9.5t-23-9.5t-9-22.5V671q0-13 9-22t23-9m128 0q13 0 22.5 9t9.5 22v193q0 13-9.5 22t-22.5 9t-22.5-9t-9.5-22V671q0-13 9.5-22t22.5-9m128 0q14 0 23 9t9 22v321q0 13-9 22.5t-23 9.5t-23-9.5t-9-22.5V671q0-13 9-22t23-9m128 0q13 0 22.5 9t9.5 22v257q0 13-9.5 22.5T736 960t-22.5-9.5T704 928V671q0-13 9.5-22t22.5-9"></svg:path>`,
})
export class WhhShredderIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
