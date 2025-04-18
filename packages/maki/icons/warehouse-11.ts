import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiWarehouse11Icon],svg[maki-warehouse-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M3 11H0V8h3v3zm4-3H4v3h3V8zm4 0H8v3h3V8zM5 4H2v3h3V4zm4 0H6v3h3V4zm1.44-.76a.5.5 0 0 0-.19-.68L5.75.06a.5.5 0 0 0-.49 0l-4.5 2.5a.5.5 0 0 0 .49.87L5.5 1.07l4.26 2.37a.5.5 0 0 0 .679-.198l.001-.002z" fill="currentColor"></svg:path>`,
})
export class MakiWarehouse11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
