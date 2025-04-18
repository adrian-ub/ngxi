import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBrokenImageOutlineRoundedIcon],svg[material-symbols-broken-image-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm1-8.425l3.3-3.3q.3-.3.7-.3t.7.3l3.3 3.3l3.3-3.3q.3-.3.7-.3t.7.3l.3.3V5H5v6.575zM5 19h14v-6.6l-1-1l-3.3 3.3q-.3.3-.7.3t-.7-.3L10 11.4l-3.3 3.3q-.3.3-.7.3t-.7-.3l-.3-.3zm0 0v-6.6v2V5z"></svg:path>`,
})
export class MaterialSymbolsBrokenImageOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
