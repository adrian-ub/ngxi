import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdCloseSmallIcon],svg[line-md-close-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 7l10 10"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="16;0"></svg:animate></svg:path><svg:path d="M17 7l-10 10"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="16;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCloseSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
