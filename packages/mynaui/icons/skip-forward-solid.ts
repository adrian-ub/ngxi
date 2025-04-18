import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiSkipForwardSolidIcon],svg[mynaui-skip-forward-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 2.25a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75M3.75 5.08c0-1.467 1.697-2.283 2.843-1.366l8.65 6.92a1.75 1.75 0 0 1 0 2.733l-8.65 6.919c-1.146.917-2.843.1-2.843-1.367z"></svg:path>`,
})
export class MynauiSkipForwardSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
