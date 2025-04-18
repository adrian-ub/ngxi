import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMoodEditIcon],svg[tabler-mood-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.955 11.104a9 9 0 1 0-9.895 9.847M9 10h.01M15 10h.01"></svg:path><svg:path d="M9.5 15c.658.672 1.56 1 2.5 1q.189 0 .376-.018m6.044-.372a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z"></svg:path></svg:g>`,
})
export class TablerMoodEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
