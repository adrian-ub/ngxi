import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBlueprintLightIcon],svg[ph-blueprint-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 58H70V40a6 6 0 0 0-6-6H48a30 30 0 0 0-30 30v112a30 30 0 0 0 30 30h184a6 6 0 0 0 6-6V64a6 6 0 0 0-6-6M30 64a18 18 0 0 1 18-18h10v100H48a29.87 29.87 0 0 0-18 6Zm196 130H48a18 18 0 0 1 0-36h16a6 6 0 0 0 6-6V70h156Zm-122-56a6 6 0 0 0 0 12h18v10a6 6 0 0 0 12 0v-10h28v10a6 6 0 0 0 12 0v-10h18a6 6 0 0 0 0-12h-18v-20h18a6 6 0 0 0 0-12h-18V96a6 6 0 0 0-12 0v10h-28V96a6 6 0 0 0-12 0v10h-18a6 6 0 0 0 0 12h18v20Zm30-20h28v20h-28Z"></svg:path>`,
})
export class PhBlueprintLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
