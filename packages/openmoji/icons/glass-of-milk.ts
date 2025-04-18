import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiGlassOfMilkIcon],svg[openmoji-glass-of-milk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="m19.275 27.598l-1.517-10.115l36.209.313l-1.19 9.648zm34.27.341L48.35 67H24.6l-5.921-38.951"></svg:path><svg:path fill="#d0cfce" d="M43.404 29L38.35 67h10l5.054-38z"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M48.35 67H24.6L17 17h38z"></svg:path><svg:path stroke-miterlimit="10" d="M19.54 28h33.185"></svg:path></svg:g>`,
})
export class OpenmojiGlassOfMilkIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
