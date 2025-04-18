import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiMlCreateSingleMetricJobIcon],svg[oui-ml-create-single-metric-job-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16a16 16 0 0 1-16 16m0-30C8.268 2 2 8.268 2 16s6.268 14 14 14s14-6.268 14-14A14 14 0 0 0 16 2"></svg:path><svg:path fill="currentColor" d="M23 15h-6V9h-2v6H9v2h6v6h2v-6h6z" class="ouiIcon__fillSecondary"></svg:path>`,
})
export class OuiMlCreateSingleMetricJobIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
