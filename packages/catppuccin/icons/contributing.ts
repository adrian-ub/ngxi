import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinContributingIcon],svg[catppuccin-contributing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#cad3f5" d="M8.128 14.499h-4.81c-.386 0-.818-.432-.818-.818V2.317c0-.385.432-.817.817-.817h9.37c.385 0 .817.432.817.817v6.866m-8-3.683H10.5m-5 4h3"></svg:path><svg:path stroke="#a6da95" d="m9.5 12.5l2 2l4-4"></svg:path></svg:g>`,
})
export class CatppuccinContributingIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
