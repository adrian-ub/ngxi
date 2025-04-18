import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignMediaLibraryFilledIcon],svg[tdesign-media-library-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2v2H5V2zM3 7.5h18v-2H3zM23 22V9H1v13zm-8-6.5l-5.25 3.031V12.47z"></svg:path>`,
})
export class TdesignMediaLibraryFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
