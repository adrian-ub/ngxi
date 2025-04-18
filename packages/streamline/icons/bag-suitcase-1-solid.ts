import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBagSuitcase1SolidIcon],svg[streamline-bag-suitcase-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.823 1.627A.25.25 0 0 1 5 1.553h4a.25.25 0 0 1 .25.25V3h-4.5V1.803a.25.25 0 0 1 .073-.176M3.25 3V1.803A1.75 1.75 0 0 1 5 .053h4a1.75 1.75 0 0 1 1.75 1.75V3h1.75A1.5 1.5 0 0 1 14 4.5v8a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5v-8A1.5 1.5 0 0 1 1.5 3zm-.375 3.578c0-.345.28-.625.625-.625h7a.625.625 0 1 1 0 1.25h-7a.625.625 0 0 1-.625-.625M3.5 9.797a.625.625 0 1 0 0 1.25h7a.625.625 0 1 0 0-1.25z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBagSuitcase1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
