import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibProductHuntIcon],svg[cib-product-hunt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.394 13.675A2.33 2.33 0 0 1 18.069 16h-4.394v-4.65h4.394a2.33 2.33 0 0 1 2.325 2.325M31.5 16c0 8.563-6.938 15.5-15.5 15.5S.5 24.562.5 16S7.438.5 16 .5S31.5 7.438 31.5 16m-8.006-2.325a5.43 5.43 0 0 0-5.425-5.425h-7.494v15.5h3.1V19.1h4.394a5.43 5.43 0 0 0 5.425-5.425"></svg:path>`,
})
export class CibProductHuntIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
