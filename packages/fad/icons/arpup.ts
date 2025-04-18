import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fadArpupIcon],svg[fad-arpup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M48 203.996A4 4 0 0 0 52.004 208h25.994c1.106 0 2.002-.89 2.002-2.002v-27.996c0-1.106-.89-2.002-2.002-2.002H50.002c-1.106 0-2.002.89-2.002 2.002zm32-29.998c0 1.106.89 2.002 2.002 2.002h27.996c1.106 0 2.002-.89 2.002-2.002v-27.996c0-1.106-.89-2.002-2.002-2.002H82.002c-1.106 0-2.002.89-2.002 2.002zm32-32c0 1.106.89 2.002 2.002 2.002h27.996c1.106 0 2.002-.89 2.002-2.002v-27.996c0-1.106-.89-2.002-2.002-2.002h-27.996c-1.106 0-2.002.89-2.002 2.002zm32-32c0 1.106.89 2.002 2.002 2.002h27.996c1.106 0 2.002-.89 2.002-2.002V82.002c0-1.106-.89-2.002-2.002-2.002h-27.996c-1.106 0-2.002.89-2.002 2.002zm32-32c0 1.106.89 2.002 2.002 2.002h27.996c1.106 0 2.002-.89 2.002-2.002V50.002c0-1.106-.89-2.002-2.002-2.002h-27.996c-1.106 0-2.002.89-2.002 2.002z"></svg:path>`,
})
export class FadArpupIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
