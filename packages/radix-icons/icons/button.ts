import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsButtonIcon],svg[radix-icons-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 5h11a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1M0 6a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.5.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m2.25.75a.75.75 0 1 1 1.5 0a.75.75 0 0 1-1.5 0m3.75-.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsButtonIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
