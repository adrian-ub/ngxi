import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsProductLoadingIcon],svg[hugeicons-product-loading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 10.265V6h15v4.265c0 3.175 0 4.762-.976 5.749c-.977.986-2.548.986-5.69.986h-1.667c-3.143 0-4.714 0-5.69-.986c-.977-.986-.977-2.574-.977-5.749M4.5 6l.721-1.538c.56-1.194.84-1.79 1.406-2.126C7.194 2 7.92 2 9.375 2h5.25c1.454 0 2.181 0 2.748.336s.847.932 1.406 2.126L19.5 6m-9 3h3M12 19.5V22m0-2.5H7m5 0h5m-10 0H4.5A2.5 2.5 0 0 0 2 22m5-2.5V22m10-2.5h2.5A2.5 2.5 0 0 1 22 22m-5-2.5V22" color="currentColor"></svg:path>`,
})
export class HugeiconsProductLoadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
