import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLocationAdd24FilledIcon],svg[fluent-location-add-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.97 18.056l1.187-1.174a8.707 8.707 0 1 0-12.314 0q.444.444 1.102 1.09l3.491 3.396a2.25 2.25 0 0 0 3.128 0a658 658 0 0 0 3.406-3.312M12 7a.75.75 0 0 1 .75.75V10h2.5a.75.75 0 0 1 0 1.5h-2.5v2.25a.75.75 0 0 1-1.5 0V11.5h-2.5a.75.75 0 0 1 0-1.5h2.5V7.75A.75.75 0 0 1 12 7"></svg:path>`,
})
export class FluentLocationAdd24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
