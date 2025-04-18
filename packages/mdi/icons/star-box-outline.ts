import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiStarBoxOutlineIcon],svg[mdi-star-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.58 17L12 14.84L8.42 17l.95-4.07l-3.16-2.73l4.17-.36L12 6l1.62 3.83l4.17.36l-3.16 2.73zM19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM5 5v14h14V5z"></svg:path>`,
})
export class MdiStarBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
