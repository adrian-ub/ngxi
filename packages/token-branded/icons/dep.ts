import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDepIcon],svg[token-branded-dep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#EAB74C"><svg:path d="M8.511 4.676L7.295 9.648h9.388l-1.254-4.972zM21 13.659l-3.936-3.476l-4.694 7.686l5.171 1.455z"></svg:path><svg:path fill-rule="evenodd" d="M15.867 10.093h.626l-4.456 7.177l-4.507-7.177h6.67l-1.388 2.592l.7 1.117zm-7.42.452h2.372l2.397 3.746l-1.18 1.955zm5.008 0h-2.034l1.107 1.663z" clip-rule="evenodd"></svg:path><svg:path d="m3 13.659l3.936-3.476l4.694 7.686l-5.17 1.455z"></svg:path></svg:g>`,
})
export class TokenBrandedDepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
