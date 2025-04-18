import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGenshinAssistantIcon],svg[arcticons-genshin-assistant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 3.5l6.634 13.252L44.5 24l-13.866 7.248L24 44.5l-6.634-13.252L3.5 24l13.866-7.248zM3.5 24h41M24 3.5v41m-6.634-13.252l13.268-14.496m0 14.496L17.366 16.752"></svg:path>`,
})
export class ArcticonsGenshinAssistantIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
