import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoArrowExpandIcon],svg[fontisto-arrow-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.918 24L24 14.918V24zM.05 24v-9.082L9.132 24zm3.493-5.59l6.385-6.385l-6.435-6.436L0 9.082V0h9.082L5.711 3.371l6.438 6.436l6.315-6.315L14.968 0h9.082v9.082L20.678 5.71l-6.315 6.315l6.266 6.265l-2.218 2.218l-6.262-6.265l-6.389 6.386z"></svg:path>`,
})
export class FontistoArrowExpandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
