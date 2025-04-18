import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWeekendIcon],svg[material-symbols-light-weekend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18.462q-.846 0-1.423-.577T2 16.46v-4.807q0-.594.443-1.009T3.5 10.23t1.057.414t.443 1.01v3.308h14v-3.308q0-.594.443-1.009t1.057-.414t1.057.414t.443 1.009v4.808q0 .846-.577 1.423T20 18.462zm2-4.5v-2.5q0-.864-.574-1.47T4 9.3V7.846Q4 7 4.577 6.423T6 5.846h12q.846 0 1.423.577T20 7.846V9.3q-.863.083-1.432.697q-.568.614-.568 1.465v2.5z"></svg:path>`,
})
export class MaterialSymbolsLightWeekendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
