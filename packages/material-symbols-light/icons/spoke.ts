import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpokeIcon],svg[material-symbols-light-spoke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10q-1.237 0-2.119-.881T9 7t.881-2.119T12 4t2.119.881T15 7t-.881 2.119T12 10M7 20q-1.237 0-2.119-.881T4 17t.881-2.119T7 14t2.119.881T10 17t-.881 2.119T7 20m10 0q-1.237 0-2.119-.881T14 17t.881-2.119T17 14t2.119.881T20 17t-.881 2.119T17 20"></svg:path>`,
})
export class MaterialSymbolsLightSpokeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
