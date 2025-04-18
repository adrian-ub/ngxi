import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackAgIcon],svg[flagpack-ag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#1B1B1B" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"></svg:path><svg:path fill="#F9D313" fill-rule="evenodd" d="m16 14l-2.003 3.8l.05-4.196l-3.658 2.65l2.093-3.76l-4.59.977l3.72-2.58L7 10l4.613-.89L7.89 6.529l4.59.977l-2.092-3.76l3.659 2.65l-.05-4.195L16 6l2.003-3.8l-.05 4.196l3.658-2.65l-2.093 3.76l4.59-.977l-3.72 2.58L25 10l-4.613.89l3.722 2.581l-4.59-.977l2.092 3.76l-3.658-2.65l.05 4.195z" clip-rule="evenodd"></svg:path><svg:path fill="#F1F9FF" d="M6 14h20v10H6z"></svg:path><svg:path fill="#4A80E8" d="M2 10h28v4H2z"></svg:path><svg:path fill="#E31D1C" fill-rule="evenodd" d="m0 6l16 18L32 6v18H0z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class FlagpackAgIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
