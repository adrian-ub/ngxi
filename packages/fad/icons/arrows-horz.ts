import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fadArrowsHorzIcon],svg[fad-arrows-horz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M100.218 80.292c-2.205 0-2.746-1.292-1.214-2.883L128 47.313l29.24 30.11c1.538 1.585 1 2.87-1.209 2.87h-19.239l.636 95.811h18.596c2.21 0 2.746 1.28 1.201 2.854L128 208.746l-28.982-29.773c-1.542-1.584-1.004-2.869 1.2-2.869h19.54V80.292z"></svg:path>`,
})
export class FadArrowsHorzIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
