import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBaby0203AltNegativeIcon],svg[healthicons-baby-0203-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsBaby0203AltNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm24 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12m-9 16.041V16.447c.99.407 2.012.9 3.047 1.466q.286.164.568.317a41 41 0 0 1 6.371 4.522c3.579 3.091 6.57 6.764 8.014 10.434v.855C33 38.021 30.188 42 24 42c-6.187 0-9-4.548-9-7.959M26.293 21.24a43 43 0 0 0-1.26-1.048C27.49 20.186 29.957 19.178 33 17v11.83c-1.738-2.752-4.107-5.346-6.707-7.591" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsBaby0203AltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsBaby0203AltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
