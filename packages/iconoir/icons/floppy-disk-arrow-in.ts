import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirFloppyDiskArrowInIcon],svg[iconoir-floppy-disk-arrow-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3 7.5V5a2 2 0 0 1 2-2h11.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 21 7.828V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2.5M6 21v-4"></svg:path><svg:path d="M18 21v-7.4a.6.6 0 0 0-.6-.6H15m1-10v5.4a.6.6 0 0 1-.6.6h-1.9M8 3v3m-7 6h11m0 0L9 9m3 3l-3 3"></svg:path></svg:g>`,
})
export class IconoirFloppyDiskArrowInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
