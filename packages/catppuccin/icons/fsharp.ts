import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinFsharpIcon],svg[catppuccin-fsharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#8aadf4" stroke-linecap="round" stroke-linejoin="round" d="m1 8l5.5-6v2.93L3.57 8l2.93 2.8v2.93zm14 0L9.5 2v2.93L12.25 8L9.5 10.79v2.93z"></svg:path>`,
})
export class CatppuccinFsharpIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
