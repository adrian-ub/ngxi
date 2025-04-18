import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFlashOnRoundedIcon],svg[material-symbols-flash-on-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.525 20.325q-.225-.075-.375-.262T10 19.6V14H9q-.825 0-1.412-.587T7 12V4q0-.825.588-1.412T9 2h5.85q.8 0 1.288.625T16.425 4L15 9h1.125q.9 0 1.338.8t-.088 1.55l-6 8.675q-.15.225-.387.3t-.463 0"></svg:path>`,
})
export class MaterialSymbolsFlashOnRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
