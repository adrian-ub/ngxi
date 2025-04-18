import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAltIcon],svg[streamline-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13.207.793a1 1 0 0 1 .293.707v11a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h11a1 1 0 0 1 .707.293m-2.76 4.412v3.59M9.25 5.205h2.394"></svg:path><svg:path d="M6.747 5.205v3.59h2.095m-6.592 0l1.102-3.307a.415.415 0 0 1 .394-.283v0c.179 0 .337.114.394.283l1.102 3.307M2.649 7.598h2.194"></svg:path></svg:g>`,
})
export class StreamlineAltIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
