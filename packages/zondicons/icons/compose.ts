import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsComposeIcon],svg[zondicons-compose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v14h14v-6l2-2v10H0V2h10L8 4zm10.3-.3l4 4L8 16H4v-4zm1.4-1.4L16 0l4 4l-2.3 2.3z"></svg:path>`,
})
export class ZondiconsComposeIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
