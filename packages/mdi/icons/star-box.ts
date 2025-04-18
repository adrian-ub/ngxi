import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStarBoxIcon],svg[mdi-star-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-3.42 14l-.95-4.08l3.16-2.73l-4.17-.36L12 6l-1.62 3.84l-4.17.36l3.16 2.73L8.42 17L12 14.84z"></svg:path>`,
})
export class MdiStarBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
