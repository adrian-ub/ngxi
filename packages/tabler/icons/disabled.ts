import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDisabledIcon],svg[tabler-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M9 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0"></svg:path><svg:path d="M11 7v8h4l4 5m-8-9h5m-9 .5a5 5 0 1 0 6 7.5"></svg:path></svg:g>`,
})
export class TablerDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
