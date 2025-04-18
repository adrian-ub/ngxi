import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsRadiationIcon],svg[bxs-radiation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.912 8.531L7.121 3.877a.5.5 0 0 0-.704-.166a9.98 9.98 0 0 0-4.396 7.604a.505.505 0 0 0 .497.528l5.421.09a4.04 4.04 0 0 1 1.973-3.402m8.109-4.51a.504.504 0 0 0-.729.151L14.499 8.83a4.03 4.03 0 0 1 1.546 3.112l5.419-.09a.507.507 0 0 0 .499-.53a10 10 0 0 0-3.942-7.301m-4.067 11.511a4 4 0 0 1-1.962.526a4 4 0 0 1-1.963-.526l-2.642 4.755a.5.5 0 0 0 .207.692A9.95 9.95 0 0 0 11.992 22a9.94 9.94 0 0 0 4.396-1.021a.5.5 0 0 0 .207-.692z"></svg:path><svg:circle cx="12" cy="12" r="3" fill="currentColor"></svg:circle>`,
})
export class BxsRadiationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
