import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTextFieldsRoundedIcon],svg[material-symbols-light-text-fields-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.556 19q-.258 0-.445-.18t-.188-.436V6.25H3.635q-.265 0-.45-.184T3 5.619t.18-.441T3.615 5h9.846q.265 0 .45.18t.185.438t-.18.444t-.435.188H9.173v12.116q0 .264-.18.449T8.556 19m8.865 0q-.257 0-.435-.18q-.178-.179-.178-.436v-7.23H14.48q-.265 0-.45-.184t-.185-.447t.18-.441t.436-.178h5.904q.264 0 .449.18t.185.438t-.18.444t-.435.188h-2.346v7.23q0 .257-.18.436q-.18.18-.438.18"></svg:path>`,
})
export class MaterialSymbolsLightTextFieldsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
