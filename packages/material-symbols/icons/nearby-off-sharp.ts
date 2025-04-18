import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNearbyOffSharpIcon],svg[material-symbols-nearby-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.8 16L17 14.2l2.2-2.2L12 4.8L9.8 7L8 5.2l4-4L22.8 12zm-6.825 6.775l-10.75-10.75l3.975-4L1.4 4.2l1.4-1.4l18.4 18.4l-1.375 1.375L16.05 18.8zM12 19.2l2.25-2.2l-1.425-1.425L12 16.4l-4.375-4.375l.825-.825l-1.4-1.4l-2.225 2.225zm3.6-6.4l-4.4-4.4l.8-.8l4.4 4.4z"></svg:path>`,
})
export class MaterialSymbolsNearbyOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
