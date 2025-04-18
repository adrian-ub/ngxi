import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatEuroBanknoteIcon],svg[fluent-emoji-flat-euro-banknote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#83CBFF" d="M2 10a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2z"></svg:path><svg:path fill="#0074BA" d="M3 10.5A1.5 1.5 0 0 1 4.5 9h23a1.5 1.5 0 0 1 1.5 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 3 23.5zm1.5-.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h23a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5zM2 28a2 2 0 0 0 2 2h11l2-1l2 1h9a2 2 0 0 0 2-2v-4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm24-11a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0"></svg:path><svg:path fill="#FFF478" d="M19 8h-4v19h4z"></svg:path><svg:path fill="#F3AD61" d="M19 26h-4v4h4z"></svg:path><svg:path fill="#fff" d="M11.22 13.5c-1.128 0-2.076.886-2.205 2H11.5a.5.5 0 0 1 0 1H9v1.01h2.5a.5.5 0 0 1 0 1H9.007c.087 1.127 1.033 1.99 2.213 1.99h1.28a.5.5 0 0 1 0 1h-1.28c-1.705 0-3.127-1.283-3.216-2.99H6.5a.5.5 0 1 1 0-1H8V16.5H6.5a.5.5 0 0 1 0-1h1.51c.133-1.65 1.513-3 3.21-3h1.28a.5.5 0 0 1 0 1z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatEuroBanknoteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
