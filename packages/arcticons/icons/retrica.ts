import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRetricaIcon],svg[arcticons-retrica-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 14.837a9.16 9.16 0 0 1 9.163 9.161V24a9.16 9.16 0 0 1-9.161 9.163H24a9.16 9.16 0 0 1-9.163-9.161V24a9.16 9.16 0 0 1 9.161-9.163zm15.476 24.639h-6.313v-6.314h6.313zm-3.157 0v-6.314m-3.156 3.157h6.313"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsRetricaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
