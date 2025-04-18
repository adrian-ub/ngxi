import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laTvIcon],svg[la-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 7v16h28V7zm2 2h24v12H4zm6 15v2h12v-2z"></svg:path>`,
})
export class LaTvIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
