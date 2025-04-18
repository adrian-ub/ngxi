import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsElectricityNegativeIcon],svg[healthicons-electricity-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsElectricityNegative0)"><svg:path d="m19 21l6-9v6h4l-6 9v-6z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM17 34c-.52-2.182-2.968-6.539-3.93-7.715a13.57 13.57 0 0 1-2.98-7.017a13.47 13.47 0 0 1 1.292-7.494a13.8 13.8 0 0 1 5.166-5.67A14.2 14.2 0 0 1 24.002 4c2.638 0 5.222.73 7.454 2.107a13.8 13.8 0 0 1 5.164 5.671a13.47 13.47 0 0 1 1.29 7.495a13.57 13.57 0 0 1-2.983 7.015C33.965 27.464 31.52 31.82 31 34zm0 3a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H18a1 1 0 0 1-1-1m14 3H17v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsElectricityNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsElectricityNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
