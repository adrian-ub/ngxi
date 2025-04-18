import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsClassappIcon],svg[arcticons-classapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 7.953c-10.77 0-19.5 6.842-19.5 15.283S13.23 38.52 24 38.52a24.5 24.5 0 0 0 5.585-.663l4.315 2.19l-.082-3.61c5.993-2.738 9.68-7.764 9.682-13.2c0-8.441-8.73-15.284-19.5-15.284"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 18.136v13.228c2.248-1.94 8.213-2.401 10.286-2.401V15.735c-2.073 0-8.038.461-10.286 2.401c-2.248-1.94-8.213-2.4-10.286-2.4v13.227c2.073 0 8.038.46 10.286 2.4"></svg:path>`,
})
export class ArcticonsClassappIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
