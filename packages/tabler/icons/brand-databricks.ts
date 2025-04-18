import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandDatabricksIcon],svg[tabler-brand-databricks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3 17l9 5l9-5v-3l-9 5l-9-5v-3l9 5l9-5V8l-9 5l-9-5l9-5l5.418 3.01"></svg:path>`,
})
export class TablerBrandDatabricksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
