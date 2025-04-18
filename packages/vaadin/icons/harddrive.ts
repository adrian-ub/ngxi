import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinHarddriveIcon],svg[vaadin-harddrive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1H3L.3 9h15.4zM0 10v5h16v-5zm3 3H2v-1h1zm4 0H4v-1h3z"></svg:path>`,
})
export class VaadinHarddriveIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
