import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinRustIcon],svg[catppuccin-rust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#f5a97f" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M15.5 9.5Q8 13.505.5 9.5l1-1l-1-2l2-.5V4.5h2l.5-2l1.5 1l1.5-2l1.5 2l1.5-1l.5 2h2V6l2 .5l-1 2z"></svg:path><svg:path d="M6.5 7.5a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1m5 0a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1M4 11.02c-.67.37-1.5.98-1.5 2.23s1.22 1.22 2 1.25v-2M12 11c.67.37 1.5 1 1.5 2.25s-1.22 1.22-2 1.25v-2"></svg:path></svg:g>`,
})
export class CatppuccinRustIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
