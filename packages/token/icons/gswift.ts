import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenGswiftIcon],svg[token-gswift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 16.95l5.625-6.05l1.125.55l-1.688 1.925L11.16 12l1.403.824z"></svg:path><svg:path fill="currentColor" d="m21 16.95l-5.063-5.225L18.75 10.2l-3.375-3.15h-6.75L5.25 10.2zm-11.813-9h5.626l1.97 1.85l-1.97.823L13.8 9.75H9.75l2.475.9h1.125l2.587 2.727l-8.72-3.578z"></svg:path><svg:path fill="currentColor" d="m16.36 11.518l-1.026-1.111l-.522.216l-.315-.302l1.44 1.404z"></svg:path>`,
})
export class TokenGswiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
