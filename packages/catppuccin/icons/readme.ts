import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinReadmeIcon],svg[catppuccin-readme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#8bd5ca" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8 14.5a6.5 6.5 0 1 0 0-13a6.5 6.5 0 0 0 0 13"></svg:path><svg:path d="M7 7.5h2v5H7Zm2-3a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1"></svg:path></svg:g>`,
})
export class CatppuccinReadmeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
