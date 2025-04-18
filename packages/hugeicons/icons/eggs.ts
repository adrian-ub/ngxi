import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsEggsIcon],svg[hugeicons-eggs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4.318c2.246-1.973 5.019-2.983 7.175-1.834c3.357 1.788 3.54 7.917 1.509 12.08c-.853 1.749-1.98 2.861-3.242 3.436M15 15.5c0 4.418-2.91 6.5-6.5 6.5S2 19.918 2 15.5S4.786 6 8.5 6s6.5 5.082 6.5 9.5" color="currentColor"></svg:path>`,
})
export class HugeiconsEggsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
