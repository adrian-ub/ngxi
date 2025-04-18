import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiMlOutlierDetectionJobIcon],svg[oui-ml-outlier-detection-job-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12v6h6v2H0v-8zm18 0v8h-8v-2h6v-6zM8 0v2H2v6H0V0zm12 0v8h-2V2h-6V0z"></svg:path><svg:path fill="currentColor" d="M16 24a4 4 0 1 1 0 8a4 4 0 0 1 0-8m12 0a4 4 0 1 1 0 8a4 4 0 0 1 0-8m-12 1.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5m12 0a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M28 12a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 1.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5M10 6a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 1.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5" class="ouiIcon__fillSecondary"></svg:path>`,
})
export class OuiMlOutlierDetectionJobIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
