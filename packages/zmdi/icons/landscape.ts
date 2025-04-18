import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiLandscapeIcon],svg[zmdi-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m277 64l192 256H0l128-171l96 128l34-25l-61-81z"></svg:path>`,
})
export class ZmdiLandscapeIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
