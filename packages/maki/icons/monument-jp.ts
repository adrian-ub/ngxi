import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiMonumentJpIcon],svg[maki-monument-jp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13H4c-.5 0-1-.5-1-1V5c0-2 .8-4 4-4c3.1 0 4 2 4 4v6h1c.5 0 1 .5 1 1s-.5 1-1 1m-7-2h4V5c0-1 0-2-2-2S5 4 5 5z"></svg:path>`,
})
export class MakiMonumentJpIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
