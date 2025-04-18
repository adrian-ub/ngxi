import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRemoveDoneIcon],svg[material-symbols-remove-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.825 21.8l-6.6-6.6l-2.85 2.85l-5.65-5.65l1.4-1.45l4.25 4.25l1.4-1.4L3.425 3.45L4.825 2l18.4 18.4zm-15.1-3.75l-5.65-5.65l1.4-1.4l4.25 4.25l1.4 1.4zm11.3-5.65l-1.4-1.4l4.9-4.9l1.45 1.35zm-2.85-2.85l-1.4-1.4L15.925 6l1.4 1.4z"></svg:path>`,
})
export class MaterialSymbolsRemoveDoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
