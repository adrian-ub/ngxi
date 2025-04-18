import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsBorderDashedIcon],svg[radix-icons-border-dashed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M0 7.5A.5.5 0 0 1 .5 7H3a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m5.75 0a.5.5 0 0 1 .5-.5h2.5a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5M12 7a.5.5 0 0 0 0 1h2.5a.5.5 0 0 0 0-1z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsBorderDashedIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
