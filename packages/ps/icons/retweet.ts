import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psRetweetIcon],svg[ps-retweet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M94 328q-7 0-12-5.5T77 310V170H2L104 58l103 112h-76v103h81l53 55zm368-114h-75V74q0-7-5-12.5T370 56H199l53 55h81v103h-76l103 113z"></svg:path>`,
})
export class PsRetweetIcon {
  readonly viewBox = input("0 0 464 448")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
