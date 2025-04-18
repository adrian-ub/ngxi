import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggPlayListAddIcon],svg[gg-play-list-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 5h12v2H2zm0 4h12v2H2zm8 4H2v2h8z"></svg:path><svg:path d="M16 9h2v4h4v2h-4v4h-2v-4h-4v-2h4z"></svg:path></svg:g>`,
})
export class GgPlayListAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
