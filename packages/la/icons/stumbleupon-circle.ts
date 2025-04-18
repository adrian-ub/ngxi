import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laStumbleuponCircleIcon],svg[la-stumbleupon-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4C9.398 4 4 9.398 4 16s5.398 12 12 12s12-5.398 12-12S22.602 4 16 4m0 7c-.602 0-1 .398-1 1v6c0 1.7-1.3 3-3 3s-3-1.3-3-3v-2h2v2c0 .602.398 1 1 1s1-.398 1-1v-6c0-1.7 1.3-3 3-3s3 1.3 3 3v1c0 .602-.398 1-1 1s-1-.398-1-1v-1c0-.602-.398-1-1-1m7 7c0 1.7-1.3 3-3 3s-3-1.3-3-3v-2.3c.3.198.602.3 1 .3a1.7 1.7 0 0 0 1-.3V18c0 .602.398 1 1 1s1-.398 1-1v-2h2z"></svg:path>`,
})
export class LaStumbleuponCircleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
