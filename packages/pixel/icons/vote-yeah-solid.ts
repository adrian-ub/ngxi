import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelVoteYeahSolidIcon],svg[pixel-vote-yeah-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5V4H6v1H5v12h14V5zm-2 4h-1v1h-1v1h-1v1h-1v1h-2v-1H9v-1H8v-1h1V9h1v1h2V9h1V8h1V7h1v1h1z"></svg:path><svg:path fill="currentColor" d="M23 15v4h-1v1H2v-1H1v-4h1v-1h2v2H3v2h18v-2h-1v-2h2v1z"></svg:path>`,
})
export class PixelVoteYeahSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
