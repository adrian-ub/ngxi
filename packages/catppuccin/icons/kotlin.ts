import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinKotlinIcon],svg[catppuccin-kotlin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#c6a0f6" d="M2.5 13.5h11L8 8"></svg:path><svg:path stroke="#f5a97f" d="M8.03 2.5h5.47l-8 8"></svg:path><svg:path stroke="#ed8796" d="M2.5 13.5V8"></svg:path><svg:path stroke="#7dc4e4" d="M8 2.5H2.5V8l3-2.5"></svg:path></svg:g>`,
})
export class CatppuccinKotlinIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
