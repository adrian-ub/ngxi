import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDistributeVerticalTopIcon],svg[hugeicons-distribute-vertical-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 2h20M2 14h20M8.002 7.5c0-.844-.083-1.818.75-2.299C9.1 5 9.568 5 10.502 5h3c.935 0 1.402 0 1.75.201c.834.481.75 1.455.75 2.299s.084 1.818-.75 2.299c-.348.201-.815.201-1.75.201h-3c-.934 0-1.402 0-1.75-.201c-.833-.481-.75-1.455-.75-2.299m-3 12c0-.844-.083-1.818.75-2.299C6.1 17 6.568 17 7.502 17h9c.935 0 1.402 0 1.75.201c.834.481.75 1.455.75 2.299s.084 1.818-.75 2.299c-.348.201-.815.201-1.75.201h-9c-.934 0-1.402 0-1.75-.201c-.833-.481-.75-1.455-.75-2.299" color="currentColor"></svg:path>`,
})
export class HugeiconsDistributeVerticalTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
