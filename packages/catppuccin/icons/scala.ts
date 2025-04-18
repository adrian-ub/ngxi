import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinScalaIcon],svg[catppuccin-scala-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#ed8796" stroke-linecap="round" stroke-linejoin="round" d="m2.5 2.48l11-.98v3.04l-11 1zm0 5l11-.98v3.04l-11 1zm0 5l11-.98v3.04l-11 1z"></svg:path>`,
})
export class CatppuccinScalaIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
