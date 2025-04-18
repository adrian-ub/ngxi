import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPhviewerIcon],svg[arcticons-phviewer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.221 12.5v17.196m0-7.093a4.3 4.3 0 0 1 4.3-4.3h0a4.3 4.3 0 0 1 4.298 4.3v7.093M13.18 25.397a4.3 4.3 0 0 0 4.3 4.3h0a4.3 4.3 0 0 0 4.299-4.3v-2.794a4.3 4.3 0 0 0-4.3-4.3h0a4.3 4.3 0 0 0-4.298 4.3m0-4.299V35.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"></svg:path>`,
})
export class ArcticonsPhviewerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
