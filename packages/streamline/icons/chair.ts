import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineChairIcon],svg[streamline-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M1.5 8h11m-10 0V.5m9 0V8m-9-6.5h9m-9 3h9M2.5 8l8 5.5m1-5.5l-8 5.5"></svg:path>`,
})
export class StreamlineChairIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
