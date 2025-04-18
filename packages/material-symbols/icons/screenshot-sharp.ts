import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsScreenshotSharpIcon],svg[material-symbols-screenshot-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17v-1.5h2.5V13H16v4zm-4-6V7h4v1.5H9.5V11zM5 23V1h14v22zm2-5h10V6H7z"></svg:path>`,
})
export class MaterialSymbolsScreenshotSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
