import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignStreetRoad1Icon],svg[tdesign-street-road-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4zm6.177 2.216l-2.393 11.96l-1.96-.391L8.215 5.823zm5.608-.393l2.392 11.962l-1.962.392l-2.392-11.961zM13 7v3h-2V7zm0 4v3h-2v-3zm0 4v3h-2v-3z"></svg:path>`,
})
export class TdesignStreetRoad1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
