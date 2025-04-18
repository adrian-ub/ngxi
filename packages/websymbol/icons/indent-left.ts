import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolIndentLeftIcon],svg[websymbol-indent-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1000 118v213H331V118zm0 334v213H331V452zm0 335v213H331V787zM239 452v213L89 559z"></svg:path>`,
})
export class WebsymbolIndentLeftIcon {
  readonly viewBox = input("0 0 1000 1000")
  readonly width = input("1em")
  readonly height = input("1em")
}
