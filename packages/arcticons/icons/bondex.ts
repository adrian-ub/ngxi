import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBondexIcon],svg[arcticons-bondex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M41.546 15.778L31.224 5.5l-8.257 8.222l18.579 18.5L31.224 42.5l-8.257-8.222zm-18.579-2.056L6.454 30.166"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.225 5.5H6.455v37h24.77m-8.258-8.222L12.645 24"></svg:path>`,
})
export class ArcticonsBondexIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
