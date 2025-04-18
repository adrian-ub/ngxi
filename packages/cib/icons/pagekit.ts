import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cibPagekitIcon],svg[cib-pagekit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.203 0v32H16v-4.703H7.906V4.703h16.193v17.891h-8.094v4.703h12.797V0z"></svg:path>`,
})
export class CibPagekitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
