import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsMusicNote04Icon],svg[hugeicons-music-note-04-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12.5 3v14m0 0a4 4 0 1 1-8 0a4 4 0 0 1 8 0m0-14a7 7 0 0 1 7 7c-1.5-1.5-5.444-3.733-7-1.556" color="currentColor"></svg:path>`,
})
export class HugeiconsMusicNote04Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
