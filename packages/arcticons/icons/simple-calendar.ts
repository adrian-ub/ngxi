import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSimpleCalendarIcon],svg[arcticons-simple-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.18 7.859a4 4 0 0 0-4 4V39.5a4 4 0 0 0 4 4h27.64a4 4 0 0 0 4-4V11.859a4 4 0 0 0-4-4z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 32.926h6.778v6.399H10.5zm10.111 0h6.778v6.399h-6.778zm10.111 0H37.5v6.399h-6.778zM10.5 23.697h6.778v6.399H10.5zm10.111 0h6.778v6.399h-6.778zm10.111 0H37.5v6.399h-6.778zm0-8.804H37.5v6.399h-6.778zm-17.905-4.635V4.5m22.366 5.758V4.5"></svg:path>`,
})
export class ArcticonsSimpleCalendarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
