import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWandStarsIcon],svg[material-symbols-light-wand-stars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.708 20L4 19.292l7.736-7.742l-4.217-1.029L11.7 7.927L11.333 3l3.763 3.179l4.554-1.854l-1.829 4.56L21 12.641l-4.927-.342l-2.6 4.18l-1.048-4.216zm.58-13.192L4 5.519l1.289-1.288l1.288 1.288zM18.482 20l-1.289-1.288l1.289-1.289l1.288 1.289z"></svg:path>`,
})
export class MaterialSymbolsLightWandStarsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
