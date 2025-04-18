import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightImagesearchRollerOutlineSharpIcon],svg[material-symbols-light-imagesearch-roller-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.52 22h-4.116v-6.75h1.558v-4.5H3V4.5h2.923V3H19v4H5.923V5.5H4v4.25h8.962v5.5h1.557zm-3.116-1h2.115v-4.75h-2.115zM6.923 6H18V4H6.923zm4.48 15h2.116zM6.924 6V4z"></svg:path>`,
})
export class MaterialSymbolsLightImagesearchRollerOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
