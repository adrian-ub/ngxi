import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaSkipForwardOutlineIcon],svg[eva-skip-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 6a1 1 0 0 0-1 1v3.82l-.14-.15l-5.1-4.21a2.1 2.1 0 0 0-2.21-.26a1.76 1.76 0 0 0-1 1.59v8.42a1.76 1.76 0 0 0 1 1.59a2.2 2.2 0 0 0 .91.2a2.06 2.06 0 0 0 1.3-.46l5.1-4.21l.14-.15V17a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1m-7.5 9.91V8l4.82 4Z"></svg:path>`,
})
export class EvaSkipForwardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
