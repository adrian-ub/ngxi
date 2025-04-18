import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsFactoryBreakdownIcon],svg[flat-color-icons-factory-breakdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#E64A19" d="M29 23v-6l-8 4v2h-4v4h-4v-4H5v20h28V23z"></svg:path><svg:path fill="#992B0A" d="M25 27h4v4h-4zM9 35h4v4H9zm16 0h4v4h-4zm-8 0h4v4h-4zm0-8h4v4h-4z"></svg:path><svg:path fill="#BF360C" d="M41.2 5H38v2h-2v2h-2.3L32 43h11z"></svg:path>`,
})
export class FlatColorIconsFactoryBreakdownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
