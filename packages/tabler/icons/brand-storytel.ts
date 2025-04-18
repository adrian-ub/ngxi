import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandStorytelIcon],svg[tabler-brand-storytel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.103 22c2.292-2.933 16.825-2.43 16.825-11.538C20.928 4.164 15.954 2 12.477 2S3 5.036 3 13.241C3 19.615 4.103 22 4.103 22"></svg:path>`,
})
export class TablerBrandStorytelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
