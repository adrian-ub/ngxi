import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoTable1Icon],svg[fontisto-table-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 0H1.333C.596 0-.001.597-.001 1.334v21.333c0 .737.597 1.334 1.334 1.334H28c.737 0 1.334-.597 1.334-1.334V1.334C29.334.597 28.737 0 28 0M13.334 8.001v5.333H2.667V8.001zm2.666 0h10.667v5.333H16zM2.667 16h10.667v5.333H2.667zM16 21.333V16h10.667v5.333z"></svg:path>`,
})
export class FontistoTable1Icon {
  readonly viewBox = input("0 0 29 24")
  readonly width = input("1.21em")
  readonly height = input("1em")
}
