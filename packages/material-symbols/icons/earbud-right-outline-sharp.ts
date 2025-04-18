import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEarbudRightOutlineSharpIcon],svg[material-symbols-earbud-right-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22V12h-2v-2h4v10h2V10h3V6h-9V4h11v8h-3v10zm-3-8q-2.5 0-4.25-1.75T3 8t1.75-4.25T9 2h1v12zm-1-2.125v-7.75q-1.35.35-2.175 1.425T5 8t.825 2.45T8 11.875M8 8"></svg:path>`,
})
export class MaterialSymbolsEarbudRightOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
