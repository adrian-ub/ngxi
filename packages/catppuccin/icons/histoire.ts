import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinHistoireIcon],svg[catppuccin-histoire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m5 4.5l2.5 3l3-2l1.5 6l-2.5-3l-3 2z"></svg:path><svg:path d="m2.5 1.5l11-1l1 14l-11 1z"></svg:path></svg:g>`,
})
export class CatppuccinHistoireIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
