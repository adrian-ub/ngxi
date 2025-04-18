import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinVhsIcon],svg[catppuccin-vhs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round" d="M2 3.5c-.828 0-1.5.743-1.5 1.556v5.888c0 .813.672 1.556 1.5 1.556h12c.828 0 1.5-.743 1.5-1.556V5.056c0-.813-.672-1.556-1.5-1.556Zm.405 3H4v3H2.405A3 3 0 0 1 2 8c0-.515.142-1.051.405-1.5M6 6.5h4v3H6Zm6 0h1.595c.262.449.405.985.405 1.5s-.143 1.051-.405 1.5H12Z"></svg:path>`,
})
export class CatppuccinVhsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
