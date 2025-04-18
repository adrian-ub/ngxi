import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBagDuotoneIcon],svg[lets-icons-bag-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" d="M4.858 9.847c.067-.876.101-1.314.389-1.58C5.534 8 5.973 8 6.852 8h10.296c.879 0 1.318 0 1.605.266c.288.267.322.705.389 1.58l.244 3.178c.264 3.42.395 5.13-.462 6.317a4 4 0 0 1-.66.713C17.143 21 15.43 21 12 21s-5.145 0-6.263-.946q-.374-.317-.661-.713c-.857-1.188-.725-2.898-.462-6.317z"></svg:path><svg:path stroke="currentColor" d="M8.5 8V6.5a3.5 3.5 0 1 1 7 0V8"></svg:path><svg:path fill="currentColor" d="M8 11.5a.5.5 0 0 0 1 0zm1 0V10H8v1.5zm6 0a.5.5 0 0 0 1 0zm1 0V10h-1v1.5z"></svg:path></svg:g>`,
})
export class LetsIconsBagDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
