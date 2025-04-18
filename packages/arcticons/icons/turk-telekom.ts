import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTurkTelekomIcon],svg[arcticons-turk-telekom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.5 25.684L17.905 10.906v29.555zm-25.595-7.715L4.5 10.229v15.479z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m11.257 25.684l12.637 7.295V18.388zm31.488-14.173l-6.88-3.972v7.944z"></svg:path>`,
})
export class ArcticonsTurkTelekomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
