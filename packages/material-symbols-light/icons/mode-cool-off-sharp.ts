import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightModeCoolOffSharpIcon],svg[material-symbols-light-mode-cool-off-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.925 23.058L12.5 16.633V21.5h-1v-4.842l-3.75 3.7l-.708-.708l4.25-4.25L8.6 12.708l-4.25 4.25l-.708-.708l3.7-3.75H2.5v-1h4.867L1.833 5.966l.713-.714L19.64 22.344zm.725-6.1L15.192 12.5h-1.951L11.5 10.76V8.808L7.042 4.35l.708-.708l3.75 3.7V2.5h1v4.842l3.75-3.7l.708.708L12.5 8.808V11.5h2.692l4.458-4.458l.708.708l-3.7 3.75H21.5v1h-4.842l3.7 3.75z"></svg:path>`,
})
export class MaterialSymbolsLightModeCoolOffSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
