import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilDialpadIcon],svg[uil-dialpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2.25H3a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4A.76.76 0 0 0 7.75 7V3A.76.76 0 0 0 7 2.25m-.75 4h-2.5v-2.5h2.5Zm14.75-4h-4a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75V3a.76.76 0 0 0-.75-.75m-.75 4h-2.5v-2.5h2.5Zm-6.25-4h-4a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75V3a.76.76 0 0 0-.75-.75m-.75 4h-2.5v-2.5h2.5ZM7 9.25H3a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75v-4A.76.76 0 0 0 7 9.25m-.75 4h-2.5v-2.5h2.5Zm7.75-4h-4a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75v-4a.76.76 0 0 0-.75-.75m-.75 4h-2.5v-2.5h2.5Zm7.75-4h-4a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75v-4a.76.76 0 0 0-.75-.75m-.75 4h-2.5v-2.5h2.5Zm-6.25 3h-4a.76.76 0 0 0-.75.75v4a.76.76 0 0 0 .75.75h4a.76.76 0 0 0 .75-.75v-4a.76.76 0 0 0-.75-.75m-.75 4h-2.5v-2.5h2.5Z"></svg:path>`,
})
export class UilDialpadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
