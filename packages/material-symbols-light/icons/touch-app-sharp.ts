import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTouchAppSharpIcon],svg[material-symbols-light-touch-app-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21H9.39l-5.734-7.594l.811-.887l3.725 1.873V6.27h1.006v5.27H19zM5.233 8.77q-.268-.454-.404-.96q-.137-.505-.137-1.04q0-1.672 1.165-2.836Q7.02 2.769 8.692 2.769t2.836 1.165t1.164 2.833q0 .542-.136 1.045t-.404.957l-.86-.5q.2-.35.3-.712t.1-.788q0-1.25-.875-2.125T8.692 3.77t-2.125.875t-.875 2.125q0 .425.1.788t.3.712z"></svg:path>`,
})
export class MaterialSymbolsLightTouchAppSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
