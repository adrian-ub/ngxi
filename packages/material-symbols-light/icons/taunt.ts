import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTauntIcon],svg[material-symbols-light-taunt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.412 14.514q-.427.228-.91.099q-.483-.13-.736-.532q-.31-.514-.103-1.077t.778-.762l8.463-2.915l.477.948zm.415 5.755v-4.886l8.898-4.677l-.425-.856l4.796-2.408l.496.974l-6.765 5.103v6.75zM7.692 11q-1.257 0-2.128-.871T4.692 8t.872-2.129T7.692 5t2.13.871q.87.871.87 2.129t-.87 2.129t-2.13.871"></svg:path>`,
})
export class MaterialSymbolsLightTauntIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
