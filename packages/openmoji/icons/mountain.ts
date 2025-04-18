import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiMountainIcon],svg[openmoji-mountain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3F3F3F" d="M52 42.2s-.2-6.2-.3-6.8s-.7-1.6-1-2.1L48.2 29L42 24.5l-7.2 5.4l2.6 4.5l4.9-.4l10.2 13.3z"></svg:path><svg:path fill="#9B9B9A" d="m50 39l3.4 9.1L60 56H12l4-7l2-12l7-19l4 4l4 3l4 8h5z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="m60 55l-6.6-6.9L50 39m-13-6l-4-8l-4-3l-4-4l-7 19l-2 12l-4 6"></svg:path><svg:path d="m31 24l1 9h10l8 6l-1 6l1 5l-2 2l-3 3m-6-27l4-3l4 4l3 5"></svg:path></svg:g>`,
})
export class OpenmojiMountainIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
