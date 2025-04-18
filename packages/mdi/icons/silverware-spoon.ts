import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSilverwareSpoonIcon],svg[mdi-silverware-spoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.88 11.53l-9.76 9.76l-1.41-1.41l9.76-9.76c-.71-1.53-.21-3.68 1.38-5.27c1.91-1.92 4.65-2.28 6.11-.82c1.47 1.47 1.11 4.21-.81 6.12c-1.59 1.59-3.74 2.09-5.27 1.38"></svg:path>`,
})
export class MdiSilverwareSpoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
