import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilHouseUserIcon],svg[uil-house-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.664 10.252l-9-8a1 1 0 0 0-1.328 0l-9 8a1 1 0 0 0 1.328 1.496L4 11.449V21a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9.551l.336.299a1 1 0 0 0 1.328-1.496M9.184 20a2.982 2.982 0 0 1 5.632 0Zm1.316-5.5A1.5 1.5 0 1 1 12 16a1.5 1.5 0 0 1-1.5-1.5M18 20h-1.101a5 5 0 0 0-2.259-3.228a3.47 3.47 0 0 0 .86-2.272a3.5 3.5 0 0 0-7 0a3.47 3.47 0 0 0 .86 2.272A5 5 0 0 0 7.1 20H6V9.671l6-5.333l6 5.333Z"></svg:path>`,
})
export class UilHouseUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
