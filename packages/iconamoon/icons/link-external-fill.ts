import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonLinkExternalFillIcon],svg[iconamoon-link-external-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.707 15.707L17.5 7.914l1.793 1.793A1 1 0 0 0 21 9V4l-.001-.048A.996.996 0 0 0 20 3h-5a1 1 0 0 0-.707 1.707L16.086 6.5l-7.793 7.793a1 1 0 1 0 1.414 1.414M4 3a1 1 0 0 0-1 1v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-5a1 1 0 1 0-2 0v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5h6a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class IconamoonLinkExternalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
