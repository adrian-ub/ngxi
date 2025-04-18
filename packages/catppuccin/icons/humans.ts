import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinHumansIcon],svg[catppuccin-humans-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g stroke="#f5a97f" stroke-linejoin="round" clip-path="url(#catppuccinHumans0)"><svg:path d="M2.28 1.87C1.1 2.2.32 3.45.53 4.8l1.38 8.6c.14.9.7 1.62 1.44 1.93V3.68c0-.58-.21-.7-.64-.7h-.43v-1.1Zm3.19-.47c.15.23.24.56.24 1v4.53l.31-.4c.62-.83 1.27-1.69 3.02-1.69c2.36 0 3.32 1.28 3.32 2.9v4.83c-.01.43-.02.87.54.87h2.56c.04-.27.05-.55.02-.84l-1.24-9.9C14.07 1.33 12.9.35 11.62.53l-6.15.88Z"></svg:path><svg:path d="M10.89 15.5c-.54-.14-.78-.68-.78-1.48V8.44c0-.81-.54-1.27-1.72-1.27s-2.68.7-2.68 2.32v6.01z"></svg:path></svg:g><svg:defs><svg:clippath id="catppuccinHumans0"><svg:path fill="#fff" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class CatppuccinHumansIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
