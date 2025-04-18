import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnMediaRewindOutlineIcon],svg[typcn-media-rewind-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 8.676v8.05l-4.133-4.025zm.2-2.276a1.8 1.8 0 0 0-1.253.512C6.566 9.227 3 12.701 3 12.701l5.944 5.789A1.802 1.802 0 0 0 12 17.201v-9c0-.994-.806-1.801-1.8-1.801M19 8.676v8.051l-4.133-4.025zm.2-2.276a1.8 1.8 0 0 0-1.253.512C15.566 9.227 12 12.701 12 12.701l5.944 5.789A1.802 1.802 0 0 0 21 17.201v-9c0-.994-.806-1.801-1.8-1.801"></svg:path>`,
})
export class TypcnMediaRewindOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
