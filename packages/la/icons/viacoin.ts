import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laViacoinIcon],svg[la-viacoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.281 6l2.563 6H5v2h4.688l.843 2H5v2h6.406l4.469 10.531L20.469 18H27v-2h-5.656l.875-2H27v-2h-3.906l2.625-6H23.53l-4.375 10H12.72L8.438 6zm7.282 12h4.718l-2.375 5.469z"></svg:path>`,
})
export class LaViacoinIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
