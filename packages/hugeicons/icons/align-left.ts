import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAlignLeftIcon],svg[hugeicons-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.002 7.5c0-.844-.083-1.818.75-2.299C9.1 5 9.568 5 10.502 5h1c.935 0 1.402 0 1.75.201c.834.481.75 1.455.75 2.299s.084 1.818-.75 2.299c-.348.201-.815.201-1.75.201h-1c-.934 0-1.402 0-1.75-.201c-.833-.481-.75-1.455-.75-2.299m0 9c0-.844-.083-1.818.75-2.299C9.1 14 9.568 14 10.502 14h7c.935 0 1.402 0 1.75.201c.834.481.75 1.455.75 2.299s.084 1.818-.75 2.299c-.348.201-.815.201-1.75.201h-7c-.934 0-1.402 0-1.75-.201c-.833-.481-.75-1.455-.75-2.299M4 2v20" color="currentColor"></svg:path>`,
})
export class HugeiconsAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
