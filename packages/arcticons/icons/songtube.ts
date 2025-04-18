import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSongtubeIcon],svg[arcticons-songtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.132 4.5v20.198a8.26 8.26 0 0 0 8.261 8.26h4.01V4.5Zm27.736 0H26.01v39"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.009 43.5h5.534a6.324 6.324 0 0 0 6.324-6.324V4.5"></svg:path>`,
})
export class ArcticonsSongtubeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
