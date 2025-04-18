import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDeployedCodeSharpIcon],svg[material-symbols-deployed-code-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 22.3l-9-5.175V6.875L12 1.7l9 5.175v10.25zm-1-9.725v6.85L12 20l1-.575v-6.85L19 9.1V8.05l-1.075-.625L12 10.85L6.075 7.425L5 8.05V9.1z"></svg:path>`,
})
export class MaterialSymbolsDeployedCodeSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
