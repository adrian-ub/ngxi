import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laBuromobelexperteIcon],svg[la-buromobelexperte-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v6h6V5zm8 0v6h6V5zm8 0v6h6V5zM7 7h2v2H7zm8 0h2v2h-2zm8 0h2v2h-2zM5 13v6h6v-6zm8 0v6h6v-6zm8 0v6h6v-6zM7 15h2v2H7zm8 0h2v2h-2zm8 0h2v2h-2zM5 21v6h6v-6zm8 0v6h6v-6zm8 0v6h6v-6zM7 23h2v2H7zm8 0h2v2h-2z"></svg:path>`,
})
export class LaBuromobelexperteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
