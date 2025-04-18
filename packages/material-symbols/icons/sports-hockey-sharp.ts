import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSportsHockeySharpIcon],svg[material-symbols-sports-hockey-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20v-4h2v4zm3 0v-4h4l.85-1.95l1.6 3.5l-1.1 2.45zm15 0v-4h2v4zm-1 0h-5.35L6.35 4H9.7L12 9.2L14.3 4h3.35l-4.05 8.85L15 16h4z"></svg:path>`,
})
export class MaterialSymbolsSportsHockeySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
