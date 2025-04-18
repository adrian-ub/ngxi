import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feCodeIcon],svg[fe-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m21.004 11.657l-5.657 5.657l-1.414-1.415l4.242-4.242l-4.242-4.243L15.347 6zm-15.176 0l4.243 4.242l-1.414 1.415L3 11.657L8.657 6l1.414 1.414z"></svg:path>`,
})
export class FeCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
