import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCloudyNightIcon],svg[tdesign-cloudy-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.133.92l-.102 1.186q-.017.194-.017.393a4.506 4.506 0 0 0 4.9 4.49l1.185-.103l-.103 1.185a6.5 6.5 0 0 1-2.162 4.3a5.2 5.2 0 0 1 1.186 3.31c0 2.983-2.501 5.338-5.505 5.338H6.604C4.097 21.019 2 19.052 2 16.549c0-1.833 1.126-3.38 2.709-4.076a6 6 0 0 1-.006-.263c0-3.147 2.398-5.7 5.464-6.139a6.51 6.51 0 0 1 5.782-5.048zM12.232 6.1q.235.04.464.097c2.15.53 3.883 2.121 4.538 4.19c.723.092 1.404.32 2.013.658l.032.018a4.5 4.5 0 0 0 1.5-2.1a6.51 6.51 0 0 1-5.723-5.723a4.52 4.52 0 0 0-2.824 2.86m-1.123 1.904h-.064c-2.44.034-4.342 1.938-4.342 4.206q0 .395.073.766l.184.956l-.95.21C4.833 14.402 4 15.403 4 16.548c0 1.33 1.13 2.47 2.604 2.47h9.91c1.972 0 3.506-1.53 3.506-3.338c0-1.052-.512-2-1.333-2.62a3.6 3.6 0 0 0-2.231-.718l-.855.014l-.146-.841c-.283-1.624-1.553-2.96-3.239-3.377a4.6 4.6 0 0 0-1.107-.134"></svg:path>`,
})
export class TdesignCloudyNightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
