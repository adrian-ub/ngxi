import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsVaginaAlt24pxIcon],svg[healthicons-vagina-alt-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 21C2.142 13.97 2.532 10.03 5 3h14.105c2.339 7.03 2.708 10.97 0 18H13v-3l4-4l-1.06-1.06L13 15.878V15a1 1 0 1 0-2 0v.879l-2.94-2.94L7 14l4 4v3z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsVaginaAlt24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
