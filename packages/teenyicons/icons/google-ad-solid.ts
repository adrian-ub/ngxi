import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsGoogleAdSolidIcon],svg[teenyicons-google-ad-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6a1 1 0 0 0-1 1v1h2V7a1 1 0 0 0-1-1m6 2H9.5a.5.5 0 0 0 0 1H11z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M0 4.5A2.5 2.5 0 0 1 2.5 2h10A2.5 2.5 0 0 1 15 4.5v6a2.5 2.5 0 0 1-2.5 2.5h-10A2.5 2.5 0 0 1 0 10.5zM4 10V9h2v1h1V7a2 2 0 1 0-4 0v3zm7-3H9.5a1.5 1.5 0 1 0 0 3H12V5h-1z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsGoogleAdSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
