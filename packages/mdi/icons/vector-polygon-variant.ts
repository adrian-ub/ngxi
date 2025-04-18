import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiVectorPolygonVariantIcon],svg[mdi-vector-polygon-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8V2h-6v3.8L14.4 8H9.6L8 5.8V2H2v6h2v8H2v6h6v-2h8v2h6v-6h-2V8zm-11 2h2v2h-2zM4 4h2v2H4zm2 16H4v-2h2zm10-2H8v-2H6V8h1.1L9 10.6V14h6v-3.4L16.9 8H18v8h-2zm4 2h-2v-2h2zM18 6V4h2v2z"></svg:path>`,
})
export class MdiVectorPolygonVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
