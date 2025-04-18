import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmFloppyDiskIcon],svg[charm-floppy-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2.75 2.75v10.5h10.5v-7.5l-3-3z"></svg:path><svg:path d="M5.75 13.25v-3.5h4.5v3.5"></svg:path></svg:g>`,
})
export class CharmFloppyDiskIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
