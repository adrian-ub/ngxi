import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEarbudsSharpIcon],svg[material-symbols-light-earbuds-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.003 20.5q-1.866 0-3.185-1.316T3.5 16V6.046q0-1.061.748-1.804q.748-.742 1.79-.742H8.5v5h-4V16q0 1.458 1.022 2.48q1.021 1.02 2.48 1.02t2.479-1.02T11.5 16V8q0-1.868 1.316-3.184Q14.13 3.5 15.997 3.5t3.185 1.316T20.5 8v10q0 1.044-.76 1.772q-.761.728-1.786.728H15.5v-5h4V8q0-1.458-1.022-2.48q-1.021-1.02-2.48-1.02t-2.479 1.02T12.5 8v8q0 1.868-1.315 3.184Q9.869 20.5 8.002 20.5"></svg:path>`,
})
export class MaterialSymbolsLightEarbudsSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
