import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBabyMale0203mAltIcon],svg[healthicons-baby-male-0203m-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M33 18a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path><svg:path fill-rule="evenodd" d="M12 22a6 6 0 0 0 4.89-9.476L20 9.414V11a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1h-4a1 1 0 1 0 0 2h1.586l-3.11 3.11A6 6 0 1 0 12 22m0-2a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd"></svg:path><svg:path d="M33 42c-6.187 0-9-4.548-9-7.959V16.447c.99.407 2.012.9 3.047 1.466q.286.164.568.318a41 41 0 0 1 6.371 4.522c3.579 3.09 6.57 6.763 8.014 10.434v.854C42 38.021 39.188 42 33 42m2.293-20.761a43 43 0 0 0-1.26-1.048C36.49 20.186 38.957 19.178 42 17v11.83c-1.738-2.752-4.107-5.346-6.707-7.591"></svg:path></svg:g>`,
})
export class HealthiconsBabyMale0203mAltIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
