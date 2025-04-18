import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBreadMachineIcon],svg[icon-park-bread-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M7 27C7 22.5817 10.5817 19 15 19H33C37.4183 19 41 22.5817 41 27V35C41 37.2091 39.2091 39 37 39H11C8.79086 39 7 37.2091 7 35V27Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M34.0002 19V12C39 12 39 5 34.0002 5C29.0004 5 19.0004 5 14.0002 5C9.00006 5 8.99979 12 14.0002 12V19"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M22 11L20 13"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M28 11L26 13"></svg:path><svg:circle cx="24" cy="29" r="4" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M15 39V43"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M33 39V43"></svg:path></svg:g>`,
})
export class IconParkBreadMachineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
