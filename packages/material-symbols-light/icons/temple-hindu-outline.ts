import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTempleHinduOutlineIcon],svg[material-symbols-light-temple-hindu-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 21.5v-10h1v2h2.866L9.475 3.202V1.5h1v2H13.5v-2h1v1.577L17.634 13.5H20.5v-2h1v10h-8v-5h-3v5zm5.527-10h7.946l-.907-3H8.934zm1.2-4h5.546l-.907-3h-3.731zM3.5 20.5h6v-5h5v5h6v-6h-3.634l-.6-2H7.734l-.6 2H3.5zm8.5-8"></svg:path>`,
})
export class MaterialSymbolsLightTempleHinduOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
