import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinNunjucksIcon],svg[catppuccin-nunjucks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round" d="M14 14.5h-4c-.75 0-1-.25-1-1v-3l2-.5v2.5h2v-8h2v9c0 .75-.25 1-1 1m-13 0v-13h1.5l2.5 6v-6h2v13H5.5L3 8.5v6z"></svg:path>`,
})
export class CatppuccinNunjucksIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
