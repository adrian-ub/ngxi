import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMotohubIcon],svg[arcticons-motohub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36 30H12a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1m1-4V12a1 1 0 0 0-1-1h-9.25a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1H36a1 1 0 0 0 1-1m-14.75-9.5V12a1 1 0 0 0-1-1h-9.252a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h9.251a1 1 0 0 0 1-1m.001 9.75v-4.5a1 1 0 0 0-1-1h-9.252a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h9.251a1 1 0 0 0 1-1"></svg:path>`,
})
export class ArcticonsMotohubIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
