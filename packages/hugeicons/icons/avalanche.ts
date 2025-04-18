import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAvalancheIcon],svg[hugeicons-avalanche-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M2 21h9.655c2.52 0 3.78 0 4.216-.83c.435-.829-.26-1.905-1.651-4.058L6.936 4.84C6.139 3.607 5.74 2.99 5.18 3C3.953 3.02 2.5 6 2 7m8-2c.602 1.214 1.15 2.015 2 3"></svg:path><svg:path d="M2 7c.2.59.327 1.503.756 1.967c.25.271.634.383.995.289c.542-.141.864-.72 1.376-.923c.24-.095.507-.095.746 0c.642.254 1.055 1.064 1.767 1.158c.684.09 1.026-.52 1.36-1.013m9.727 6.567a3.5 3.5 0 0 1-.287 1.084m.287-1.084C18.936 12.882 17.042 11 14.762 11c-.709 0-1.957.175-2.762.763m6.727 3.282C20.529 15.037 22 16.398 22 18.08c0 1.39-1.004 2.562-2.373 2.921"></svg:path></svg:g>`,
})
export class HugeiconsAvalancheIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
