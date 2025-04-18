import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataTrending48FilledIcon],svg[fluent-data-trending-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 6A1.5 1.5 0 0 1 9 7.5v28a3.5 3.5 0 0 0 3.5 3.5h28a1.5 1.5 0 0 1 0 3h-28A6.5 6.5 0 0 1 6 35.5v-28A1.5 1.5 0 0 1 7.5 6M38 17.121V23.5a1.5 1.5 0 0 0 3 0v-10a1.5 1.5 0 0 0-1.5-1.5h-10a1.5 1.5 0 0 0 0 3h6.379l-8.428 8.428l-4.442-4.038a1.5 1.5 0 0 0-2.037.018l-8.5 8a1.5 1.5 0 1 0 2.056 2.184l7.49-7.049l4.473 4.067a1.5 1.5 0 0 0 2.07-.05z"></svg:path>`,
})
export class FluentDataTrending48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
