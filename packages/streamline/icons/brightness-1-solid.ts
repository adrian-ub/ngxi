import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBrightness1SolidIcon],svg[streamline-brightness-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 0a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1A.75.75 0 0 1 7 0m2.25 7a2.25 2.25 0 1 1-4.5 0a2.25 2.25 0 0 1 4.5 0m-1.5 5.25a.75.75 0 0 0-1.5 0v1a.75.75 0 0 0 1.5 0zM11.5 7a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1A.75.75 0 0 1 11.5 7M.75 6.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm1.3-4.2a.75.75 0 0 1 1.06 0l.862.86A.75.75 0 0 1 2.91 3.973l-.86-.861a.75.75 0 0 1 0-1.06Zm9.04 7.978a.75.75 0 1 0-1.062 1.06l.861.862a.75.75 0 0 0 1.06-1.061zm.86-7.978a.75.75 0 0 1 0 1.06l-.86.862a.75.75 0 0 1-1.062-1.061l.861-.86a.75.75 0 0 1 1.06 0Zm-7.978 9.04a.75.75 0 1 0-1.061-1.06l-.86.86a.75.75 0 0 0 1.06 1.06l.86-.86Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrightness1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
