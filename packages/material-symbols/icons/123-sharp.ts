import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbols123SharpIcon],svg[material-symbols-123-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 15v-4.5H4V9h3v6zM9 15v-3.5h3v-1H9V9h4.5v3.5h-3v1h3V15zm6 0v-1.5h3v-1h-2v-1h2v-1h-3V9h4.5v6z"></svg:path>`,
})
export class MaterialSymbols123SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
