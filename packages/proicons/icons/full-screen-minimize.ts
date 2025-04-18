import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsFullScreenMinimizeIcon],svg[proicons-full-screen-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.345 3.75v2.095a2.5 2.5 0 0 1-2.5 2.5H3.75M8.345 20.25v-2.095a2.5 2.5 0 0 0-2.5-2.5H3.75M15.655 3.75v2.095a2.5 2.5 0 0 0 2.5 2.5h2.095M15.655 20.25v-2.095a2.5 2.5 0 0 1 2.5-2.5h2.095"></svg:path>`,
})
export class ProiconsFullScreenMinimizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
