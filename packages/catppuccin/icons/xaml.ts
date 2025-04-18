import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinXamlIcon],svg[catppuccin-xaml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#8aadf4" d="m10.25 4.5l2.25 4l-2.25 4h-4.5l-2.25-4l2.25-4z"></svg:path><svg:path stroke="#cad3f5" d="m2.5 12.5l-2-4l2-4"></svg:path><svg:path stroke="#8aadf4" d="m6 12l2-3.5h4m-4 0L6 5"></svg:path><svg:path stroke="#cad3f5" d="m13.5 4.5l2 4l-2 4"></svg:path></svg:g>`,
})
export class CatppuccinXamlIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
