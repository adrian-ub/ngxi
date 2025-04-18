import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerCreativeCommonsIcon],svg[tabler-creative-commons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"></svg:path><svg:path d="M10.5 10.5a2.187 2.187 0 0 0-2.914.116a1.93 1.93 0 0 0 0 2.768a2.19 2.19 0 0 0 2.914.116m6-3a2.187 2.187 0 0 0-2.914.116a1.93 1.93 0 0 0 0 2.768a2.19 2.19 0 0 0 2.914.116"></svg:path></svg:g>`,
})
export class TablerCreativeCommonsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
