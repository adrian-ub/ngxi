import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignApiIcon],svg[tdesign-api-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.586 12L5 7.586L6.414 9l-3 3l3 3L5 16.414zm7-7L12 .586L16.414 5L15 6.414l-3-3l-3 3zM9 17.586l3 3l3-3L16.414 19L12 23.414L7.586 19zm1.998-4.584v-2.004h2.004v2.004zM17.586 15l3-3l-3-3L19 7.586L23.414 12L19 16.414z"></svg:path>`,
})
export class TdesignApiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
