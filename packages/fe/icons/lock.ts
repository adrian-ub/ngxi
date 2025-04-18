import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feLockIcon],svg[fe-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 10V7a5 5 0 1 1 10 0v3h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2zm-1 2v8h12v-8zm3-2h6V7a3 3 0 0 0-6 0zm5 4h2v4h-2z"></svg:path>`,
})
export class FeLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
