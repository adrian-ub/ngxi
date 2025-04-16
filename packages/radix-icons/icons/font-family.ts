import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsFontFamilyIcon],svg[radix-icons-font-family-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 4.5C2.5 3.099 3.599 2 5 2h7.499a.5.5 0 0 1 .001 1H8.692l-.287.855L7.343 7H8.5a.5.5 0 0 1 0 1H7.004a286 286 0 0 1-1.046 3.039c-.322.9-.75 1.447-1.29 1.739c-.505.273-1.026.272-1.384.272H3.25a.55.55 0 0 1 0-1.1c.392 0 .654-.01.894-.14c.22-.119.511-.395.778-1.142c.185-.517.532-1.527.92-2.668H4.5a.5.5 0 0 1 0-1h1.682a1350 1350 0 0 0 1.18-3.496L7.533 3H5c-.849 0-1.5.651-1.5 1.5a.5.5 0 0 1-1 0"></svg:path>`,
})
export class RadixIconsFontFamilyIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
