import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMan3SharpIcon],svg[material-symbols-light-man-3-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.23 21.75v-6.57H8.463V7.674h7.077v7.5h-1.77v6.577zM12 6.308l-1.942-1.942L12 2.423l1.942 1.943z"></svg:path>`,
})
export class MaterialSymbolsLightMan3SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
