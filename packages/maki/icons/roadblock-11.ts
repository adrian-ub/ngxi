import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiRoadblock11Icon],svg[maki-roadblock-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5.5 0a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11zM2 4.5h7v2H2v-2z" fill="currentColor"></svg:path>`,
})
export class MakiRoadblock11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
