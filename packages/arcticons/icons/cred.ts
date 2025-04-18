import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCredIcon],svg[arcticons-cred-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.013 33.553L24.027 43.5l-17.04-9.947V4.5h34.026z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.651 21.872v9.232L24.02 38.5l-12.671-7.396V14.5H24m-8.355-5h21.006v7.715"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m30.485 29.71l-6.472 3.79l-8.302-4.846v-6.056"></svg:path>`,
})
export class ArcticonsCredIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
