import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneYepIcon],svg[icon-park-twotone-yep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTYep0"><svg:path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 42c-4.736 2.706-11 2.5-16 0s-9-8-9-12.5c0-2.623 4.356-4.53 6.196-5.219c.46-.172.75-.64.677-1.126L11.586 7.909a3.404 3.404 0 1 1 6.75-.88L20 22l.83-15.77a3.408 3.408 0 1 1 6.795.518l-1.038 10.386A2.37 2.37 0 0 1 28.947 15A4.053 4.053 0 0 1 33 19.053V21.5a3.5 3.5 0 1 1 7 0v10.649c0 .566-.053 1.132-.253 1.661c-.596 1.577-2.46 5.169-7.747 8.19"></svg:path></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTYep0)"></svg:path>`,
})
export class IconParkTwotoneYepIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
