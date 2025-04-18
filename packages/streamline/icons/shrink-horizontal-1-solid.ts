import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShrinkHorizontal1SolidIcon],svg[streamline-shrink-horizontal-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.5.75a.75.75 0 0 0-1.5 0v12.5a.75.75 0 0 0 1.5 0zm12.5 0a.75.75 0 0 0-1.5 0v12.5a.75.75 0 0 0 1.5 0zm-2.809 3.288a.5.5 0 0 1 .309.462v5a.5.5 0 0 1-.854.354l-2.5-2.5a.5.5 0 0 1 0-.708l2.5-2.5a.5.5 0 0 1 .545-.108m-8.382 0a.5.5 0 0 1 .545.108l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5A.5.5 0 0 1 2.5 9.5v-5a.5.5 0 0 1 .309-.462" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineShrinkHorizontal1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
