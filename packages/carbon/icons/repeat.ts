import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRepeatIcon],svg[carbon-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6h20.172l-3.586-3.586L24 1l6 6l-6 6l-1.414-1.414L26.172 8H6v7H4V8a2 2 0 0 1 2-2m3.414 14.414L5.828 24H26v-7h2v7a2 2 0 0 1-2 2H5.828l3.586 3.586L8 31l-6-6l6-6z"></svg:path>`,
})
export class CarbonRepeatIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
