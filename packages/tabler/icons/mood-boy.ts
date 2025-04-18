import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerMoodBoyIcon],svg[tabler-mood-boy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M17 4.5a9 9 0 0 1 3.864 5.89a2.5 2.5 0 0 1-.29 4.36a9 9 0 0 1-17.137 0a2.5 2.5 0 0 1-.29-4.36a9 9 0 0 1 3.746-5.81"></svg:path><svg:path d="M9.5 16a3.5 3.5 0 0 0 5 0m-6-14C10 3 11 5.5 11 7m1.5-5c1.5 2 2 3.5 2 5M9 12h.01M15 12h.01"></svg:path></svg:g>`,
})
export class TablerMoodBoyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
