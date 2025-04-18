import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCompareVerticalIcon],svg[mdi-compare-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15v7h2v-7h3l-4-4l-4 4zm-1-6h-3V2H8v7H5l4 4z"></svg:path>`,
})
export class MdiCompareVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
