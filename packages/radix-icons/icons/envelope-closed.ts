import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsEnvelopeClosedIcon],svg[radix-icons-envelope-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm0 1h13v.925a.45.45 0 0 0-.241.07L7.5 7.967L1.241 3.995A.45.45 0 0 0 1 3.925zm0 1.908V12h13V4.908L7.741 8.88a.45.45 0 0 1-.482 0z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsEnvelopeClosedIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
