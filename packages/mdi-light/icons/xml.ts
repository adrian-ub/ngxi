import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightXmlIcon],svg[mdi-light-xml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.17 17.74l-.71-.7L20 12.5l-4.54-4.54l.71-.7l5.24 5.24zm-9.34 0L1.59 12.5l5.24-5.24l.71.7L3 12.5l4.54 4.54zM12.73 5h1l-3.46 15h-1z"></svg:path>`,
})
export class MdiLightXmlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
