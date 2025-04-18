import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFastrightIcon],svg[whh-fastright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M589.49 467q19 18 19 44.5t-19 45.5l-451 448q-19 19-46 19t-46-19l-27-27q-19-18-19-44.5t19-45.5l379-376l-379-376q-19-19-19-45.5t19-45.5l27-26q19-19 46-19t46 19zm-154 511q-19-18-19-44.5t19-45.5l379-376l-379-376q-19-19-19-45.5t19-45.5l27-26q19-19 45.5-19t45.5 19l452 448q19 18 19 44.5t-19 45.5l-452 448q-19 19-45.5 19t-45.5-19z"></svg:path>`,
})
export class WhhFastrightIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
