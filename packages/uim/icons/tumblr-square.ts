import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uimTumblrSquareIcon],svg[uim-tumblr-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.571 17.85a3.396 3.396 0 0 1-3.747-3.332v-4.076H8.562v-1.61a3.82 3.82 0 0 0 2.454-3.363a.1.1 0 0 1 .09-.093h1.827v3.178h2.496v1.888h-2.505v3.884a1.094 1.094 0 0 0 1.2 1.229a3 3 0 0 0 1.007-.215l.6 1.779c-.611.49-1.376.75-2.16.73z" opacity=".5"></svg:path><svg:path fill="currentColor" d="M2.019 2v20h19.963V2zm11.552 15.85a3.396 3.396 0 0 1-3.747-3.332v-4.076H8.562v-1.61a3.82 3.82 0 0 0 2.454-3.363a.1.1 0 0 1 .09-.093h1.827v3.178h2.496v1.888h-2.505v3.884a1.094 1.094 0 0 0 1.2 1.229a3 3 0 0 0 1.007-.215l.6 1.779c-.611.49-1.376.75-2.16.73z"></svg:path>`,
})
export class UimTumblrSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
