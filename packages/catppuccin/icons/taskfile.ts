import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinTaskfileIcon],svg[catppuccin-taskfile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#7dc4e4" stroke-linecap="round" stroke-linejoin="round" d="M14.5 11.752L8 15.5l-6.5-3.752l.002-7.5L8 .5l6.5 3.752zM1.5 4.25L8 8m6.5-3.75L8 8m.003 0v7.5"></svg:path>`,
})
export class CatppuccinTaskfileIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
