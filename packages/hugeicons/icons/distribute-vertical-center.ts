import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDistributeVerticalCenterIcon],svg[hugeicons-distribute-vertical-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 17H2m17 0h3M8.002 7c0-.844-.083-1.818.75-2.299c.348-.201.816-.201 1.75-.201h3c.935 0 1.402 0 1.75.201c.834.481.75 1.455.75 2.299s.084 1.818-.75 2.299c-.348.201-.815.201-1.75.201h-3c-.934 0-1.402 0-1.75-.201c-.833-.481-.75-1.455-.75-2.299m-3 10c0-.844-.083-1.818.75-2.299c.348-.201.816-.201 1.75-.201h9c.935 0 1.402 0 1.75.201c.834.481.75 1.455.75 2.299s.084 1.818-.75 2.299c-.348.201-.815.201-1.75.201h-9c-.934 0-1.402 0-1.75-.201c-.833-.481-.75-1.455-.75-2.299M8 7H2m14 0h6" color="currentColor"></svg:path>`,
})
export class HugeiconsDistributeVerticalCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
