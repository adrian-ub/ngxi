import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayRectangleIcon],svg[subway-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v512h512V0zm465.5 465.5h-419v-419h418.9v419z"></svg:path>`,
})
export class SubwayRectangleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
