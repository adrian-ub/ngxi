import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinSnowpackIcon],svg[catppuccin-snowpack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#7dc4e4" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.5 13.5h13L8 2z"></svg:path><svg:path d="m5 8l1.5 1.5l1.5-2h3"></svg:path></svg:g>`,
})
export class CatppuccinSnowpackIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
