import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPlaylist03Icon],svg[hugeicons-playlist-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 3h18M2 10h13M2 17h7m9.25 2c0 1.657-1.4 3-3.125 3S12 20.657 12 19s1.4-3 3.125-3s3.125 1.343 3.125 3m0 0v-9c.417.6.75 3.12 3.75 3.6" color="currentColor"></svg:path>`,
})
export class HugeiconsPlaylist03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
