import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8SortDownIcon],svg[icons8-sort-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.594 12l1.687 1.72l10 10l.72.686l.72-.687l10-10L28.405 12zm4.844 2h15.124L16 21.563L8.437 14z"></svg:path>`,
})
export class Icons8SortDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
