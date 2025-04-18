import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDistributeVerticalBottomIcon],svg[hugeicons-distribute-vertical-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 22h20M2 10h20M8.002 4.5c0 .844-.083 1.818.75 2.299C9.1 7 9.568 7 10.502 7h3c.935 0 1.402 0 1.75-.201c.834-.481.75-1.455.75-2.299s.084-1.818-.75-2.299C14.904 2 14.437 2 13.502 2h-3c-.934 0-1.402 0-1.75.201c-.833.481-.75 1.455-.75 2.299m-3 12c0 .844-.083 1.818.75 2.299c.348.201.816.201 1.75.201h9c.935 0 1.402 0 1.75-.201c.834-.481.75-1.455.75-2.299s.084-1.818-.75-2.299C17.904 14 17.437 14 16.502 14h-9c-.934 0-1.402 0-1.75.201c-.833.481-.75 1.455-.75 2.299" color="currentColor"></svg:path>`,
})
export class HugeiconsDistributeVerticalBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
