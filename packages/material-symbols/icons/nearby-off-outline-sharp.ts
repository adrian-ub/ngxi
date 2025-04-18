import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNearbyOffOutlineSharpIcon],svg[material-symbols-nearby-off-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.975 22.775l-10.75-10.75l3.975-4L1.4 4.2l1.4-1.4l18.4 18.4l-1.375 1.375L16.05 18.8ZM12 19.2l2.25-2.2l-1.425-1.425L12 16.4l-4.375-4.375l.825-.825l-1.4-1.4l-2.225 2.225Zm6.8-3.2L17 14.2l2.2-2.2L12 4.8L9.8 7L8 5.2l4-4L22.8 12Zm-3.2-3.2l-4.4-4.4l.8-.8l4.4 4.4Z"></svg:path>`,
})
export class MaterialSymbolsNearbyOffOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
