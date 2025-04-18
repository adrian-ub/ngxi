import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFileDottedDuotoneIcon],svg[ph-file-dotted-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 88h-56V32Z" opacity=".2"></svg:path><svg:path fill="currentColor" d="M80 224a8 8 0 0 1-8 8H56a16 16 0 0 1-16-16v-32a8 8 0 0 1 16 0v32h16a8 8 0 0 1 8 8Zm0-200H56a16 16 0 0 0-16 16v24a8 8 0 0 0 16 0V40h24a8 8 0 0 0 0-16Zm136 64.2V136a8 8 0 0 1-16 0V96h-48a8 8 0 0 1-8-8V40h-24a8 8 0 0 1 0-16h34.3l.7.3h.1l.5.3h.2l.5.3c0 .1.1.1.2.2l.4.3h.2l.4.4h.2l55.9 56A7.8 7.8 0 0 1 216 88ZM160 80h28.7L160 51.3Zm48 88a8 8 0 0 0-8 8v40h-8a8 8 0 0 0 0 16h8a16 16 0 0 0 16-16v-40a8 8 0 0 0-8-8ZM48 152a8 8 0 0 0 8-8v-40a8 8 0 0 0-16 0v40a8 8 0 0 0 8 8Zm104 64h-40a8 8 0 0 0 0 16h40a8 8 0 0 0 0-16Z"></svg:path>`,
})
export class PhFileDottedDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
