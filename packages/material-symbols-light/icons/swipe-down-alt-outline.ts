import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSwipeDownAltOutlineIcon],svg[material-symbols-light-swipe-down-alt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 21l-3.308-3.308l.708-.713l2.1 2.1v-5.102q-1.725-.215-2.863-1.472T7.5 9.5q0-1.868 1.316-3.184Q10.13 5 11.997 5t3.185 1.316T16.5 9.5q0 1.748-1.137 3.005T12.5 13.977v5.102l2.1-2.094l.708.707zm.002-8q1.46 0 2.479-1.022t1.019-2.48t-1.022-2.479T11.999 6t-2.48 1.022T8.5 9.502t1.022 2.479T12.002 13M12 9.5"></svg:path>`,
})
export class MaterialSymbolsLightSwipeDownAltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
