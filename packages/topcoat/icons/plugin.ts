import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatPluginIcon],svg[topcoat-plugin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 7.25C10 5.75 9.532 5 7.971 5C6.471 5 6 5.812 6 7.25V8H5c-1.56 0-2 .75-2 2.25v6c0 1.529.44 1.792 2 1.792h14c1.563 0 2.004-.263 2.004-1.792v-6C21.004 8.75 20.563 8 19 8h-1v-.75C18 5.812 17.471 5 15.971 5C14.409 5 14 5.75 14 7.25V8h-4zm0 0"></svg:path>`,
})
export class TopcoatPluginIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
