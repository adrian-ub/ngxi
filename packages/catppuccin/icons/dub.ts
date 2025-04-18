import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinDubIcon],svg[catppuccin-dub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" stroke="#ee99a0" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m4.537 10.789l-.841.41c-.25.12-.522.183-.799.183H.495V4.444h3.284c.924 0 1.673.75 1.673 1.673v2.831a2.613 2.613 0 0 0 2.613 2.613h0a2.613 2.613 0 0 0 2.614-2.613V4.44h3.157a1.67 1.67 0 0 1 1.669 1.67v.062c0 .888-.72 1.607-1.607 1.607h-1.83h1.626c1 0 1.811.811 1.811 1.811v.003c0 1-.81 1.81-1.81 1.81H11.23"></svg:path><svg:circle cx="8.034" cy="8.941" r="1.25"></svg:circle></svg:g>`,
})
export class CatppuccinDubIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
