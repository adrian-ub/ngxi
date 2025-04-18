import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFolderDocument24FilledIcon],svg[fluent-folder-document-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8V6.25A3.25 3.25 0 0 1 5.25 3h2.879a2.25 2.25 0 0 1 1.59.659l1.531 1.53L8.659 7.78a.75.75 0 0 1-.53.22zm0 1.5v8.25A3.25 3.25 0 0 0 5.25 21H13v-7.5a2.5 2.5 0 0 1 2.5-2.5h2.922a2 2 0 0 1 1.414.586L22 13.75v-5a3.25 3.25 0 0 0-3.25-3.25h-5.69L9.72 8.841a2.25 2.25 0 0 1-1.591.659zm16 5.75V12h-2.5a1.5 1.5 0 0 0-1.5 1.5v8a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V17h-3.25A1.75 1.75 0 0 1 18 15.25m1 0V12l4 4h-3.25a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class FluentFolderDocument24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
