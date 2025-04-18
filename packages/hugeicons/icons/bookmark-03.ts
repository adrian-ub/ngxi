import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBookmark03Icon],svg[hugeicons-bookmark-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 22c-4.243 0-6.364 0-7.682-1.465C3 19.072 3 16.714 3 12s0-7.071 1.318-8.536S7.758 2 12 2s6.364 0 7.682 1.464C21 4.93 21 7.286 21 12s0 7.071-1.318 8.535S16.242 22 12 22"></svg:path><svg:path d="M8 2.5v7.326c0 1.247 0 1.87.386 2.094c.749.432 2.152-1.01 2.819-1.444c.387-.252.58-.378.795-.378s.408.126.795.378c.667.434 2.07 1.876 2.819 1.444c.386-.223.386-.847.386-2.094V2.5"></svg:path></svg:g>`,
})
export class HugeiconsBookmark03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
