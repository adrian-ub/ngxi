import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiMagnifyPlusIcon],svg[mdi-magnify-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2a7 7 0 0 1 7 7c0 1.57-.5 3-1.39 4.19l.8.81H16l6 6l-2 2l-6-6v-.59l-.81-.8A6.9 6.9 0 0 1 9 16a7 7 0 0 1-7-7a7 7 0 0 1 7-7M8 5v3H5v2h3v3h2v-3h3V8h-3V5z"></svg:path>`,
})
export class MdiMagnifyPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
