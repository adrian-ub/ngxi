import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFluorescentOutlineIcon],svg[material-symbols-fluorescent-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15.05v-6h14v6zM11 5V2h2v3zm7.7 2.8l-1.4-1.4l1.8-1.8L20.5 6zM11 22v-3h2v3zm8.1-2.5l-1.8-1.8l1.4-1.4l1.8 1.8zM5.3 7.8L3.5 6l1.4-1.4l1.8 1.8zm-.4 11.7l-1.4-1.4l1.8-1.8l1.4 1.4zM7 13.05h10v-2H7zm0 0v-2z"></svg:path>`,
})
export class MaterialSymbolsFluorescentOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
