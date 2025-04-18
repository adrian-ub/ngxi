import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHojskolesangbogenIcon],svg[arcticons-hojskolesangbogen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M17.375 14v20m13.25-20v20m-13.25-10.038h13.25M29.375 14h2.5m-15.75 0h2.5m10.75 20h2.5m-15.75 0h2.5"></svg:path>`,
})
export class ArcticonsHojskolesangbogenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
