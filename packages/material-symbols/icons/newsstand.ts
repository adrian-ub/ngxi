import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsNewsstandIcon],svg[material-symbols-newsstand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20v-2h20v2zm2-4V8h2v8zm4 0V4h2v12zm4 0V4h2v12zm7 0l-4-7l1.75-1l4 7z"></svg:path>`,
})
export class MaterialSymbolsNewsstandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
