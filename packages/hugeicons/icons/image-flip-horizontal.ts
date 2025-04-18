import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsImageFlipHorizontalIcon],svg[hugeicons-image-flip-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.238 20.568h2.07c2.34 0 3.62 0 4.23-1.15c.57-1.12-.06-2.31-1.21-4.48l-2.07-3.93l-.02-.03l-.008-.014c-2.354-4.46-3.334-6.315-4.932-5.836c-1.55.46-1.55 2.59-1.55 7.75v3.93c0 1.56 0 2.42.6 3.07c.63.69 1.48.69 2.89.69m-1.99-7.69c0-2.96 0-6.02.46-6.31l.01-.01c.544.09 1.812 2.477 3.165 5.025l.045.085l.01.03l2.07 3.93c.82 1.55 1.41 2.67 1.2 3.08c-.18.35-1.32.35-2.9.35h-2.07c-.97 0-1.6 0-1.78-.19c-.21-.22-.21-.95-.21-2.06zm-8.55 7.69h2.06c1.41 0 2.27 0 2.89-.69c.6-.65.6-1.51.6-3.07v-3.93c0-5.16 0-7.29-1.55-7.75c-1.6-.47-2.58 1.378-4.947 5.844l-.003.006l.65.38l-.66-.35l-2.07 3.93l-.028.053c-1.123 2.137-1.748 3.326-1.172 4.427c.61 1.15 1.89 1.15 4.23 1.15m.37-8.86l-.66-.35h.01l.68.32l.047-.089c1.352-2.546 2.619-4.932 3.143-5.02c.47.29.47 3.35.47 6.31v3.93c0 1.11 0 1.84-.21 2.07c-.18.19-.82.19-1.78.19h-2.07c-1.58 0-2.72 0-2.9-.35c-.217-.404.36-1.494 1.159-3.004l.04-.077z" color="currentColor"></svg:path>`,
})
export class HugeiconsImageFlipHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
