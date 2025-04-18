import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinTwineIcon],svg[catppuccin-twine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#8aadf4" d="M2.5 14.5v-12h4v2.29"></svg:path><svg:path stroke="#a6da95" d="M6.5 13A5.5 5.5 0 0 1 12 7.5h1.5v-4H11A8.5 8.5 0 0 0 2.5 12v2.5h4z"></svg:path></svg:g>`,
})
export class CatppuccinTwineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
