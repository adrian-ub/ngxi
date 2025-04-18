import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsAutoFixNormalOutlineSharpIcon],svg[material-symbols-auto-fix-normal-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 7l-.95-2.05L17 4l2.05-.95L20 1l.95 2.05L23 4l-2.05.95L20 7ZM5.825 22.425l-4.25-4.25l12.6-12.6l4.25 4.25l-12.6 12.6ZM5.8 19.6l7.2-7.2l-1.4-1.4l-7.2 7.2l1.4 1.4Z"></svg:path>`,
})
export class MaterialSymbolsAutoFixNormalOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
