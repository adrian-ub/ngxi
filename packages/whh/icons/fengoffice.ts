import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFengofficeIcon],svg[whh-fengoffice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m979 767l-282 89l193-445l127 269q13 27 2 52.5T979 767M411 134L680 7q27-13 52.5-2T767 45l89 282zM134 613L7 344q-13-27-2-52.5T45 257l282-89zm479 277l-269 127q-27 13-52.5 2T257 979l-89-282z"></svg:path>`,
})
export class WhhFengofficeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
