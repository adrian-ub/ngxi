import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riPlayListAddLineIcon],svg[ri-play-list-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18h10v2H2zm0-7h20v2H2zm0-7h20v2H2zm16 14v-3h2v3h3v2h-3v3h-2v-3h-3v-2z"></svg:path>`,
})
export class RiPlayListAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
