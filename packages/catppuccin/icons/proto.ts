import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinProtoIcon],svg[catppuccin-proto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#ed8796" d="m.5 8.5l3-6h3l-3 6"></svg:path><svg:path stroke="#8aadf4" d="M6.5 13.5h-3l-3-5l1.36-2.73z"></svg:path><svg:path stroke="#eed49f" d="m15.5 7.5l-3 6h-3l3-6"></svg:path><svg:path stroke="#a6da95" d="M9.5 2.5h3l3 5l-1.36 2.73z"></svg:path></svg:g>`,
})
export class CatppuccinProtoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
