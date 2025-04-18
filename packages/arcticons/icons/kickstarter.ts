import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKickstarterIcon],svg[arcticons-kickstarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.97 24.009l3.547-3.523a9.33 9.33 0 0 0 0-13.24a9.485 9.485 0 0 0-13.33 0l-1.292 1.282a9.435 9.435 0 0 0-17.167 5.33v20.285a9.435 9.435 0 0 0 17.167 5.329l1.291 1.282a9.485 9.485 0 0 0 13.33 0a9.33 9.33 0 0 0 0-13.24z"></svg:path>`,
})
export class ArcticonsKickstarterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
