import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCity1Icon],svg[tdesign-city-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h10v8h10v12H2zm10 10v8h4v-5h4v-3zm8 5h-2v3h2zm-10 3V4H4v16zM8.004 6v2.004H6v-2h.004V6zm0 5v2.004H6v-2h.004V11zm0 5v2.004H6v-2h.004V16z"></svg:path>`,
})
export class TdesignCity1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
