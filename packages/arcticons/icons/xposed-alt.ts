import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsXposedAltIcon],svg[arcticons-xposed-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.287 14.408h2.533a2.06 2.06 0 0 1 1.801 1.31c.293.899-1.133 1.79-.871 2.697a2.79 2.79 0 0 0 2.404 2.01a2.78 2.78 0 0 0 2.21-2.138c.21-.87-1.131-1.684-.872-2.54a2.01 2.01 0 0 1 1.75-1.339h2.896a1.32 1.32 0 0 1 1.176 1.177v4.252a2.31 2.31 0 0 0 1.239 2.041c1.01.41 2.131-1.175 3.163-.823a2.7 2.7 0 0 1 1.796 2.322a2.73 2.73 0 0 1-1.912 2.255c-.96.283-1.926-1.192-2.874-.871a2.25 2.25 0 0 0-1.412 1.962v4.244a1.32 1.32 0 0 1-1.176 1.176H21.286v7.238A3.054 3.054 0 0 0 24 42.095h16.286A3.054 3.054 0 0 0 43 39.381V8.619a3.054 3.054 0 0 0-2.714-2.714H24a3.054 3.054 0 0 0-2.714 2.714Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 14.408h2.534a2.06 2.06 0 0 1 1.801 1.31c.293.899-1.133 1.79-.871 2.697a2.79 2.79 0 0 0 2.404 2.01a2.78 2.78 0 0 0 2.21-2.138c.21-.87-1.131-1.684-.872-2.54a2.01 2.01 0 0 1 1.75-1.339h2.896a1.32 1.32 0 0 1 1.176 1.177v4.252a2.31 2.31 0 0 0 1.239 2.041c1.01.41 2.132-1.175 3.163-.823a2.7 2.7 0 0 1 1.796 2.322a2.73 2.73 0 0 1-1.912 2.255c-.96.283-1.926-1.193-2.874-.871a2.25 2.25 0 0 0-1.412 1.962v4.244a1.32 1.32 0 0 1-1.176 1.176H5Z"></svg:path>`,
})
export class ArcticonsXposedAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
