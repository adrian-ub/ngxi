import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilSortAlphaUpIcon],svg[cil-sort-alpha-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m75.313 130.313l51.883-51.881V496h32V78.432l51.883 51.882l22.627-22.627l-90.51-90.51l-90.509 90.51zM440 280H304v32h101.04L296 412.732V456h144v-32H330.96L440 323.268zM395.532 48h-47.064L289.8 224h33.73l18.67-56h59.6l18.667 56H454.2Zm-42.667 88l18.667-56h.936l18.667 56Z"></svg:path>`,
})
export class CilSortAlphaUpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
