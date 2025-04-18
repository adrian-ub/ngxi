import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinAlexIcon],svg[catppuccin-alex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 1.5h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2"></svg:path><svg:path d="M5.5 12.5h5m-5-2h5m-3.75-7H8c.79 0 1.5.71 1.5 1.5v3.5h-2c-.79 0-1-1-1-1.5s.21-1.5 1-1.5h2"></svg:path></svg:g>`,
})
export class CatppuccinAlexIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
