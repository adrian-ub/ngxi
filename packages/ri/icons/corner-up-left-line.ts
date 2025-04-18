import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCornerUpLeftLineIcon],svg[ri-corner-up-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10v9h-2v-7H6.828l3.95 3.95l-1.414 1.414L3 11l6.364-6.364l1.414 1.414L6.828 10z"></svg:path>`,
})
export class RiCornerUpLeftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
