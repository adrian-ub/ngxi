import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTextRotationNoneIcon],svg[material-symbols-light-text-rotation-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 18.5v-1h13.892l-1.55-1.55l.708-.708L20.308 18l-2.758 2.758l-.708-.708l1.55-1.55zm3.112-4.846l3.907-10.308h1l3.831 10.308h-1.016l-1.026-2.838H9.666l-1.039 2.838zm2.372-3.708h3.993l-1.908-5.28h-.1z"></svg:path>`,
})
export class MaterialSymbolsLightTextRotationNoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
