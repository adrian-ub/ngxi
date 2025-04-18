import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epStopwatchIcon],svg[ep-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 896a384 384 0 1 0 0-768a384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896a448 448 0 0 1 0 896"></svg:path><svg:path fill="currentColor" d="M672 234.88c-39.168 174.464-80 298.624-122.688 372.48c-64 110.848-202.624 30.848-138.624-80C453.376 453.44 540.48 355.968 672 234.816z"></svg:path>`,
})
export class EpStopwatchIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
