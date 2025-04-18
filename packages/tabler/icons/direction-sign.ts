import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDirectionSignIcon],svg[tabler-direction-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3.32 12.774l7.906 7.905c.427.428 1.12.428 1.548 0l7.905-7.905a1.095 1.095 0 0 0 0-1.548l-7.905-7.905a1.095 1.095 0 0 0-1.548 0l-7.905 7.905a1.095 1.095 0 0 0 0 1.548zM8 12h7.5"></svg:path><svg:path d="m12 8.5l3.5 3.5l-3.5 3.5"></svg:path></svg:g>`,
})
export class TablerDirectionSignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
