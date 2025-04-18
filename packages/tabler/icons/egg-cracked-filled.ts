import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerEggCrackedFilledIcon],svg[tabler-egg-cracked-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.236 2.066L9.542 7.713l-.029.123a1 1 0 0 0 .406.978l2.764 1.974l-1.551 2.716a1 1 0 1 0 1.736.992l2-3.5l.052-.105a1 1 0 0 0-.339-1.205l-2.918-2.085l1.623-5.41C16.927 3.265 20 8.688 20 14.083c0 4.59-3.273 7.71-8 7.917c-4.75 0-8-3.21-8-7.917C4 8.429 7.372 2.739 11.236 2.066"></svg:path>`,
})
export class TablerEggCrackedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
