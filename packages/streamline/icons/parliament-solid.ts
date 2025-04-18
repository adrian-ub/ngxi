import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineParliamentSolidIcon],svg[streamline-parliament-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 .05a.75.75 0 0 0-.75.75v2.174l-1.11 2.11a.5.5 0 0 0-.058.234v2.736h3.79V5.318a.5.5 0 0 0-.058-.233L7.75 3.063V1.55h.621a.75.75 0 0 0 0-1.5h-1.37Zm2.667 9.254H4.286v4.585h1.812V12.5a.902.902 0 1 1 1.804 0v1.39h1.765zM11.4 13.89h-.485V6.645a.5.5 0 0 1 .041-.141l.999-2.199a.5.5 0 0 1 .91 0l.999 2.199a.5.5 0 0 1 .045.207v6.678a.5.5 0 0 1-.5.5H11.4Zm-8.364 0l-.001-.026V6.65a.5.5 0 0 0-.041-.145l-.999-2.199a.5.5 0 0 0-.91 0L.087 6.504a.5.5 0 0 0-.045.207v6.678a.5.5 0 0 0 .5.5h2.495Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineParliamentSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
