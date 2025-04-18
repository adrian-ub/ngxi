import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMuteIcon],svg[icon-park-outline-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"></svg:path><svg:path d="M29 14v20c-3.85 0-6.71-5.09-6.71-5.09H18.1c-.608 0-1.1-.497-1.1-1.11v-7.683c0-.614.492-1.111 1.1-1.111h4.19S25.15 14 29 14Z"></svg:path></svg:g>`,
})
export class IconParkOutlineMuteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
