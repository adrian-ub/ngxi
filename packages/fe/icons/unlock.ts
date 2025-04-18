import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feUnlockIcon],svg[fe-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 10V7a5 5 0 1 1 10 0c0 .55-.45 1-1 1s-1-.45-1-1a3 3 0 0 0-6 0v3h9a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2zm-1 2v8h12v-8zm8 2h2v4h-2z"></svg:path>`,
})
export class FeUnlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
