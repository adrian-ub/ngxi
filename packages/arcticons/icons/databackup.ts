import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDatabackupIcon],svg[arcticons-databackup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.296 26.887L6.132 17.24a1.233 1.233 0 0 1 0-2.149l17.164-9.646c.437-.246.97-.246 1.408 0l17.164 9.646a1.233 1.233 0 0 1 0 2.15l-17.164 9.646c-.437.246-.97.246-1.408 0m13.519 1.037l5.056 2.843a1.228 1.228 0 0 1 0 2.143l-17.172 9.646a1.42 1.42 0 0 1-1.398 0L6.129 32.91a1.228 1.228 0 0 1 0-2.143l5.056-2.843"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.815 20.084l5.056 2.842a1.237 1.237 0 0 1 0 2.155l-5.056 2.843l-12.116 6.804a1.42 1.42 0 0 1-1.398 0l-12.116-6.804l-5.056-2.843a1.237 1.237 0 0 1 0-2.155l5.056-2.842"></svg:path>`,
})
export class ArcticonsDatabackupIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
