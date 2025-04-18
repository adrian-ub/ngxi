import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uitDialpadIcon],svg[uit-dialpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 10H3a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4A.5.5 0 0 0 7 10m-.5 4h-3v-3h3zM7 3H3a.5.5 0 0 0-.5.5v4A.5.5 0 0 0 3 8h4a.5.5 0 0 0 .5-.5v-4A.5.5 0 0 0 7 3m-.5 4h-3V4h3zM14 3h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4A.5.5 0 0 0 14 3m-.5 4h-3V4h3zM21 3h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4A.5.5 0 0 0 21 3m-.5 4h-3V4h3zM14 17h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5m-.5 4h-3v-3h3zM21 10h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5m-.5 4h-3v-3h3zM14 10h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5m-.5 4h-3v-3h3z"></svg:path>`,
})
export class UitDialpadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
