import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSonicIcon],svg[tdesign-sonic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v20h-2V2zM9 6v12H7V6zm8 0v12h-2V6zM5 9v6H3V9zm16 0v6h-2V9z"></svg:path>`,
})
export class TdesignSonicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
