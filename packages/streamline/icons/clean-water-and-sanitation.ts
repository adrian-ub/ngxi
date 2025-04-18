import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCleanWaterAndSanitationIcon],svg[streamline-clean-water-and-sanitation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M2.942 1.812A1.015 1.015 0 0 1 3.95.671h5.823c.61 0 1.083.535 1.007 1.141l-.761 6.093c-.064.508-.496.89-1.008.89h-4.3c-.512 0-.944-.382-1.007-.89zm3.806 6.977v4.39m-1.463-1.464l1.463 1.463l1.463-1.463"></svg:path><svg:path d="M3.307 4.714c3.628.518 3.628-1.555 7.255-1.036"></svg:path></svg:g>`,
})
export class StreamlineCleanWaterAndSanitationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
