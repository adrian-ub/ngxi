import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonArrangeVerticalIcon],svg[carbon-arrange-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 2h2v28h-2zm-7 13h-8c-1.103 0-2-.897-2-2V7c0-1.103.897-2 2-2h8c1.103 0 2 .897 2 2v6c0 1.103-.897 2-2 2m-8-8v6h8V7zm0 10h8c1.103 0 2 .897 2 2v6c0 1.103-.897 2-2 2h-8c-1.103 0-2-.897-2-2v-6c0-1.103.897-2 2-2m8 8v-6h-8v6zM3 2h2v28H3z"></svg:path>`,
})
export class CarbonArrangeVerticalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
