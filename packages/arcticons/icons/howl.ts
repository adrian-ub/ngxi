import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHowlIcon],svg[arcticons-howl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M2.73 25.253s4.693 1.177 6.52 0c5.522-3.555.73-17.554 8.153-17.935c12.621-.533-1.573 34.217 12.487 34.239c7.042-.381 3.54-13.11 8.709-16.304c1.85-1.143 6.522 0 6.522 0"></svg:path>`,
})
export class ArcticonsHowlIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
