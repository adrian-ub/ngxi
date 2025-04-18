import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsArchiveIcon],svg[radix-icons-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.309 1a1 1 0 0 0-.894.553L1.053 4.276A.5.5 0 0 0 1 4.5V13a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.053-.224l-1.362-2.723A1 1 0 0 0 11.691 1zm0 1H7v2H2.309zM8 4V2h3.691l1 2zm-.5 1H13v8H2V5zm-2 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsArchiveIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
