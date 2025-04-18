import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeWebassemblyIcon],svg[material-icon-theme-webassembly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#7c4dff" d="M22 18h4v4h-4z"></svg:path><svg:path fill="#7c4dff" d="M20 2a4 4 0 0 1-8 0H2v28h28V2Zm-2 24h-2v2h-4v-2h-2v2H6v-2H4V16h2v10h4V16h2v10h4V16h2Zm10 2h-2v-4h-4v4h-2V18h2v-2h4v2h2Z"></svg:path>`,
})
export class MaterialIconThemeWebassemblyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
