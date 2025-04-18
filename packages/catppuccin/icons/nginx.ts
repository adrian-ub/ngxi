import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinNginxIcon],svg[catppuccin-nginx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 10.5v-5l5 5v-5"></svg:path><svg:path d="M1.5 11.5v-7L8 .5l6.5 4v7l-6.5 4z"></svg:path></svg:g>`,
})
export class CatppuccinNginxIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
