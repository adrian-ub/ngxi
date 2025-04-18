import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiBrandYoutubeIcon],svg[mynaui-brand-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M2 12c0-3.3 0-4.95 1.464-5.975C4.93 5 7.286 5 12 5s7.071 0 8.535 1.025S22 8.7 22 12s0 4.95-1.465 5.975C19.072 19 16.714 19 12 19s-7.071 0-8.536-1.025S2 15.3 2 12"></svg:path><svg:path d="M10.5 9.908v4.184a.41.41 0 0 0 .412.408a.4.4 0 0 0 .228-.068l3.175-2.074a.405.405 0 0 0 .003-.678l-3.175-2.11a.415.415 0 0 0-.573.11a.4.4 0 0 0-.07.228"></svg:path></svg:g>`,
})
export class MynauiBrandYoutubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
