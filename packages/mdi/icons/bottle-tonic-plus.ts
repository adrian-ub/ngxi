import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBottleTonicPlusIcon],svg[mdi-bottle-tonic-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 4h-2l-1-2h4zm1 4V6h1V5H9v1h1v2c-2.76 0-5 2.24-5 5v9h14v-9c0-2.76-2.24-5-5-5m2 9h-3v3h-2v-3H8v-2h3v-3h2v3h3z"></svg:path>`,
})
export class MdiBottleTonicPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
