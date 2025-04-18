import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[meteorIconsFileSearchIcon],svg[meteor-icons-file-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="11.5" cy="14.5" r="3.5"></svg:circle><svg:path d="m4 22l5-5m-5-2V4a2 2 0 0 1 2-2h8l6 6v12a2 2 0 0 1-2 2h-7"></svg:path></svg:g>`,
})
export class MeteorIconsFileSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
