import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerXdIcon],svg[tabler-xd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 8l4 8m-4 0l4-8m4 0v8h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2z"></svg:path>`,
})
export class TablerXdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
