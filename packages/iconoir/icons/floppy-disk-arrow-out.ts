import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFloppyDiskArrowOutIcon],svg[iconoir-floppy-disk-arrow-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 6.5V5a2 2 0 0 1 2-2h11.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 21 7.828V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.5"></svg:path><svg:path d="M8 3h8v5.4a.6.6 0 0 1-.6.6H8.6a.6.6 0 0 1-.6-.6zm10 18v-7.4a.6.6 0 0 0-.6-.6H15m-9 8v-3.5m6-5.5H1m0 0l3-3m-3 3l3 3"></svg:path></svg:g>`,
})
export class IconoirFloppyDiskArrowOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
