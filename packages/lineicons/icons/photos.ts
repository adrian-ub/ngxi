import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsPhotosIcon],svg[lineicons-photos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.25 10.5a1.25 1.25 0 1 0 0 2.5h.01a1.25 1.25 0 1 0 0-2.5z"></svg:path><svg:path fill="currentColor" d="M7.75 5.5A2.25 2.25 0 0 1 10 3.25h9a2.25 2.25 0 0 1 2.25 2.25v9A2.25 2.25 0 0 1 19 16.75h-1.75v1.75A2.25 2.25 0 0 1 15 20.75H6a2.25 2.25 0 0 1-2.25-2.25v-9A2.25 2.25 0 0 1 6 7.25h1.75zm8 4a.75.75 0 0 0-.75-.75H6a.75.75 0 0 0-.75.75v6.942l5.668-2.938a2.25 2.25 0 0 1 2.567.348l2.265 2.104zm-10.5 9c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-.497l-3.286-3.051a.75.75 0 0 0-.855-.117L5.25 18.132zm4-11.25H15a2.25 2.25 0 0 1 2.25 2.25v5.75H19a.75.75 0 0 0 .75-.75v-9a.75.75 0 0 0-.75-.75h-9a.75.75 0 0 0-.75.75z"></svg:path>`,
})
export class LineiconsPhotosIcon {
  readonly viewBox = input("0 0 25 24")
  readonly width = input("1.05em")
  readonly height = input("1em")
}
