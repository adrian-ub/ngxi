import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiLongArrowTabIcon],svg[zmdi-long-arrow-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226 94l30-30l128 128l-128 128l-30-30l76-77H0v-42h302zm179-30h43v256h-43z"></svg:path>`,
})
export class ZmdiLongArrowTabIcon {
  readonly viewBox = input("0 0 448 384")
  readonly width = input("1.17em")
  readonly height = input("1em")
}
