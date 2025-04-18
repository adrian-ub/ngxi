import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoSwedenIcon],svg[entypo-sweden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4H9v5h10V5a1 1 0 0 0-1-1M1 15c0 .553.248 1 .8 1H7v-5H1zm8 1h9a1 1 0 0 0 1-1v-4H9zM1 5v4h6V4H1.8c-.552 0-.8.447-.8 1"></svg:path>`,
})
export class EntypoSwedenIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
