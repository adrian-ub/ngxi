import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCrop24RegularIcon],svg[fluent-crop-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.25 17a.75.75 0 0 1 .102 1.493l-.102.007H18.5v2.75a.75.75 0 0 1-1.493.102L17 21.25V18.5H8.75a3.25 3.25 0 0 1-3.245-3.066L5.5 15.25L5.499 7H2.75a.75.75 0 0 1-.102-1.493L2.75 5.5h2.749L5.5 2.75a.75.75 0 0 1 1.493-.102L7 2.75L6.999 5.5H7V7h-.001L7 15.25a1.75 1.75 0 0 0 1.606 1.744L8.75 17zM8 5.5h7.25a3.25 3.25 0 0 1 3.245 3.066l.005.184V16H17V8.75a1.75 1.75 0 0 0-1.607-1.744L15.25 7H8z"></svg:path>`,
})
export class FluentCrop24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
