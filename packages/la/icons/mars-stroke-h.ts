import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laMarsStrokeHIcon],svg[la-mars-stroke-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 8c-4.406 0-8 3.594-8 8s3.594 8 8 8c4.066 0 7.438-3.066 7.938-7H20v3h2v-3h4.563l-4.282 4.281l1.438 1.438l6-6l.687-.719l-.687-.719l-6-6l-1.438 1.438L26.563 15H22v-3h-2v3h-2.063c-.5-3.934-3.87-7-7.937-7m0 2c3.324 0 6 2.676 6 6s-2.676 6-6 6s-6-2.676-6-6s2.676-6 6-6"></svg:path>`,
})
export class LaMarsStrokeHIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
