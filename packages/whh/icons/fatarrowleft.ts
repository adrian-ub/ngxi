import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFatarrowleftIcon],svg[whh-fatarrowleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1025H383v-1q-41 0-70-39L29 607Q0 567 0 512t29-94L313 39q29-38 70-39h513q53 0 90.5 37.5T1024 128v769q0 53-37.5 90.5T896 1025"></svg:path>`,
})
export class WhhFatarrowleftIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}
