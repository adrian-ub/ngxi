import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTakeoutDiningIcon],svg[material-symbols-light-takeout-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.894 10.308l-3.202-3.05l.65-.747L6.116 9.15l-.127-1.716L9.423 4h5.154l3.435 3.435l-.128 1.715l2.774-2.639l.65.747l-3.202 3.05zM6.873 19l-.592-7.796h11.438L17.127 19z"></svg:path>`,
})
export class MaterialSymbolsLightTakeoutDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
