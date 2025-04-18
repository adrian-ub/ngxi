import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggStopwatchIcon],svg[gg-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m18.621 2.55l2.829 2.83l-1.414 1.414l-2.829-2.828zM12.823 8.6h-2v4h2z"></svg:path><svg:path fill-rule="evenodd" d="M5.186 18.814A9 9 0 1 0 17.914 6.086A9 9 0 0 0 5.186 18.814m1.415-1.415A7 7 0 1 0 16.5 7.5a7 7 0 0 0-9.9 9.9" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgStopwatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
