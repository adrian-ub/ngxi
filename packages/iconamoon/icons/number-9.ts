import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonNumber9Icon],svg[iconamoon-number-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.153 19.468a1 1 0 1 0 1.694 1.064zm6.92-7.264a1 1 0 1 0-1.693-1.064zM8 9a4 4 0 0 1 4-4V3a6 6 0 0 0-6 6zm4-4a4 4 0 0 1 4 4h2a6 6 0 0 0-6-6zm4 4a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6zm-4 4a4 4 0 0 1-4-4H6a6 6 0 0 0 6 6zm-.153 7.532l5.227-8.328l-1.694-1.064l-5.227 8.328z"></svg:path>`,
})
export class IconamoonNumber9Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
