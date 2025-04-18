import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSearchFilledIcon],svg[tdesign-search-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.762 17.177A8.501 8.501 0 0 1 4.49 4.49a8.5 8.5 0 0 1 12.686 11.272l5.345 5.345l-1.415 1.414z"></svg:path>`,
})
export class TdesignSearchFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
