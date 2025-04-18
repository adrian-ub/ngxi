import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamBrightnessDownFIcon],svg[jam-brightness-down-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 12.858a4 4 0 1 1 0-8a4 4 0 0 1 0 8m6-5h1a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2m-6 6a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1m0-13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m-7 7h1a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m11.95 4.535l.707.708a1 1 0 1 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.415m-8.486 0a1 1 0 0 1 0 1.415l-.707.707A1 1 0 0 1 2.343 13.1l.707-.708a1 1 0 0 1 1.414 0zm9.193-9.192a1 1 0 0 1 0 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0m-9.9 0l.707.707A1 1 0 1 1 3.05 5.322l-.707-.707a1 1 0 0 1 1.414-1.414"></svg:path>`,
})
export class JamBrightnessDownFIcon {
  readonly viewBox = input("-4 -3.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
