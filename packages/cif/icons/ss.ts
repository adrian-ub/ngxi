import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cifSsIcon],svg[cif-ss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#078930" d="M.5 105.5h300v45H.5z"></svg:path><svg:path fill="#FFF" d="M.5 45.5h300v60H.5z"></svg:path><svg:path fill="#000" d="M.5.5h300v45H.5z"></svg:path><svg:path fill="#DA121A" d="M.5 53h300v45H.5z"></svg:path><svg:path fill="#0F47AF" d="m.5.5l129.904 75L.5 150.5z"></svg:path><svg:path fill="#FCDD09" d="m19.801 75.5l43.417 14.107l-26.833-36.932v45.65l26.833-36.932z"></svg:path></svg:g>`,
})
export class CifSsIcon {
  readonly viewBox = input("0 0 301 151")
  readonly width = input("2em")
  readonly height = input("1em")
}
