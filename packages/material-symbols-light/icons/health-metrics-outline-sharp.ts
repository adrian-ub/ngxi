import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHealthMetricsOutlineSharpIcon],svg[material-symbols-light-health-metrics-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20.846V16H3.154V8H8V3.154h8V8h4.846v8H16v4.846zM4.154 11.5h5.102l1.598 2.385l1.677-5.127h.91l1.815 2.742h4.59V9H15V4.154H9V9H4.154zM9 19.846h6V15h4.846v-2.5H14.74l-1.593-2.384l-1.677 5.132h-.915L8.719 12.5H4.154V15H9zM12 12"></svg:path>`,
})
export class MaterialSymbolsLightHealthMetricsOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
