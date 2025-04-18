import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDwIcon],svg[arcticons-dw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.897 29.016V18.984h2.257a4.39 4.39 0 0 1 4.39 4.389v1.254a4.39 4.39 0 0 1-4.39 4.39Zm25.014-10.032l-2.508 10.032l-2.508-10.032l-2.508 10.032l-2.508-10.032"></svg:path><svg:circle cx="15.105" cy="24" r="11.605" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.999 16.547a11.605 11.605 0 1 1 0 14.906"></svg:path>`,
})
export class ArcticonsDwIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
