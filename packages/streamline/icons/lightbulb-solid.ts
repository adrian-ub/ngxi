import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLightbulbSolidIcon],svg[streamline-lightbulb-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.5 9.331a5 5 0 1 0-5 0V10.5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1zm-5 3.919a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineLightbulbSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
