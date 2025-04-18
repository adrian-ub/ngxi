import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEditOutlineSharpIcon],svg[material-symbols-light-edit-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h1.098L16.796 8.302l-1.098-1.098L5 17.902zm-1 1v-2.52l13.875-13.9l2.54 2.563L6.52 20zM19 6.112L17.889 5zm-2.762 1.65l-.54-.558l1.098 1.098z"></svg:path>`,
})
export class MaterialSymbolsLightEditOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
