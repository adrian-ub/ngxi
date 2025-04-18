import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laVineIcon],svg[la-vine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.645 15.938a7.4 7.4 0 0 1-1.61.187c-2.777 0-4.914-1.938-4.914-5.309c0-1.652.64-2.511 1.543-2.511c.86 0 1.434.77 1.434 2.336c0 .886-.239 1.863-.414 2.441c0 0 .851 1.492 3.191 1.031c.496-1.101.77-2.527.77-3.781c0-3.371-1.72-5.332-4.872-5.332c-3.238 0-5.132 2.488-5.132 5.773c0 3.25 1.52 6.043 4.027 7.313c-1.055 2.11-2.395 3.969-3.793 5.367c-2.54-3.07-4.832-7.164-5.773-15.148H6.355c1.73 13.3 6.887 17.539 8.25 18.351c.77.461 1.434.442 2.141.043c1.106-.629 4.43-3.953 6.27-7.844c.773-.003 1.703-.09 2.629-.3z"></svg:path>`,
})
export class LaVineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
