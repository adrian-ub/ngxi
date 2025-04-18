import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamPodcastIcon],svg[jam-podcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19.8c-4.564-.927-8-4.962-8-9.8C0 4.477 4.477 0 10 0s10 4.477 10 10c0 4.838-3.436 8.873-8 9.8v-2.052a8 8 0 1 0-4 0zm0-4.141a6 6 0 1 1 4 0v-2.194a4 4 0 1 0-4 0zm3-3.927V20H9v-8.268a2 2 0 1 1 2 0"></svg:path>`,
})
export class JamPodcastIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
