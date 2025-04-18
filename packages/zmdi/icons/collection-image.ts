import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCollectionImageIcon],svg[zmdi-collection-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 301q0 18-12.5 30.5T384 344H128q-18 0-30.5-12.5T85 301V45q0-17 12.5-29.5T128 3h256q18 0 30.5 12.5T427 45zm-235-85l-64 85h256l-85-106l-64 79zM0 88h43v299h298v42H43q-18 0-30.5-12.5T0 387z"></svg:path>`,
})
export class ZmdiCollectionImageIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
