import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsResursIcon],svg[arcticons-resurs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.556 24c0 8.576-6.952 15.528-15.528 15.528S4.5 32.576 4.5 24zm-23.112 0c0-8.576 6.952-15.528 15.528-15.528S43.5 15.424 43.5 24z"></svg:path><svg:circle cx="24" cy="24" r="11.556" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsResursIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
