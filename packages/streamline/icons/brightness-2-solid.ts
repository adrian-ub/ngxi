import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBrightness2SolidIcon],svg[streamline-brightness-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 0a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1A.75.75 0 0 1 7 0m0 11.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1A.75.75 0 0 1 7 11.5m5.25-5.25a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zM0 7a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1A.75.75 0 0 1 0 7m3.11-4.95a.75.75 0 1 0-1.06 1.06l.86.862A.75.75 0 0 0 3.973 2.91l-.861-.86Zm6.918 7.978a.75.75 0 0 1 1.061 0l.86.86a.75.75 0 0 1-1.06 1.062l-.86-.861a.75.75 0 0 1 0-1.06Zm1.922-6.917a.75.75 0 1 0-1.06-1.06l-.862.86a.75.75 0 0 0 1.061 1.06zm-7.978 6.917a.75.75 0 0 1 0 1.06l-.861.862a.75.75 0 1 1-1.06-1.061l.86-.86a.75.75 0 0 1 1.06 0Zm2.53.184a3.25 3.25 0 0 1 0-6.424c.273-.042.498.186.498.462v5.5c0 .276-.225.504-.498.462" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineBrightness2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
