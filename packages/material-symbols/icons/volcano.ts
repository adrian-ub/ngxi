import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVolcanoIcon],svg[material-symbols-volcano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 22l4-9h3l2-5h7l4 14zM13 5V1h2v4zm4.525 1.875l-1.4-1.4L18.95 2.65l1.425 1.4zm-7.05 0L7.65 4.05l1.4-1.425l2.825 2.85z"></svg:path>`,
})
export class MaterialSymbolsVolcanoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
