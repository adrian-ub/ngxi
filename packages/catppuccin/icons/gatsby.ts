import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinGatsbyIcon],svg[catppuccin-gatsby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#c6a0f6" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.32 4.79a4.64 4.64 0 0 0-7.75 1.86l5.82 5.82a4.65 4.65 0 0 0 3.23-3.97H9.39m-6.03.47l3.71 3.71"></svg:path><svg:path d="M8 14.5a6.5 6.5 0 1 1 0-13a6.5 6.5 0 0 1 0 13"></svg:path></svg:g>`,
})
export class CatppuccinGatsbyIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
