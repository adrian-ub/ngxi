import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightComicBubbleOutlineIcon],svg[material-symbols-light-comic-bubble-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3.925L8.925 6H6v2.925L3.925 11L6 13.075V16h2.925L11 18.075l2.5-2.5l4.2 2.125l-2.15-4.175L18.075 11L16 8.925V6h-2.925zm0-1.402l2.483 2.483h3.51v3.51L19.478 11l-2.708 2.708l2.087 4.073q.136.267.08.503q-.055.235-.236.416t-.416.237q-.236.055-.503-.081l-4.073-2.087L11 19.477l-2.483-2.483h-3.51v-3.51L2.522 11l2.483-2.483v-3.51h3.51zM11 11"></svg:path>`,
})
export class MaterialSymbolsLightComicBubbleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
