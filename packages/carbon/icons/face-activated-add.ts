import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFaceActivatedAddIcon],svg[carbon-face-activated-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 4h-4V0h-2v4h-4v2h4v4h2V6h4zm-18.5 7a2.5 2.5 0 1 0 2.5 2.5a2.48 2.48 0 0 0-2.5-2.5m9 0a2.5 2.5 0 1 0 2.5 2.5a2.48 2.48 0 0 0-2.5-2.5M9 20a8.13 8.13 0 0 0 14 0z"></svg:path><svg:path fill="currentColor" d="M27.82 14A12 12 0 1 1 16 4V2a14 14 0 1 0 14 14a15 15 0 0 0-.16-2Z"></svg:path>`,
})
export class CarbonFaceActivatedAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
