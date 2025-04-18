import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhScrewdriverIcon],svg[whh-screwdriver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M978 978.5q-46 45.5-110.5 45.5T757 978l-85-82l-96-96q0-39-28-67.5T480 704l-7-7q-47-47-4-91l47-47l-303-303H96L0 64L64 0l192 96v117l303 303l47-46q43-44 91 4l7 7q1 40 29 67.5t67 27.5l96 96l82 85q46 46 46 111t-46 110.5"></svg:path>`,
})
export class WhhScrewdriverIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
