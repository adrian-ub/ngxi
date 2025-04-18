import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinStylelintIgnoreIcon],svg[catppuccin-stylelint-ignore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#8087a2" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.5 3.48L12 1.5h1.5l2 2l-1.5 1L15 6l-7 9.5l2.72-9.32M6.5 3.5l-2-1v4l2-1"></svg:path><svg:path d="m9.5 3.5l2-1v4l-2-1m-5-2.02L4 1.5H2.5l-2 2l1.5 1L1 6l7 9.5l-2.72-9.33M8.5 8a.5.5 0 0 1-.5.5a.5.5 0 0 1-.5-.5a.5.5 0 0 1 .5-.5a.5.5 0 0 1 .5.5"></svg:path><svg:path d="M6.5 3.5h3v2h-3z"></svg:path></svg:g>`,
})
export class CatppuccinStylelintIgnoreIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
