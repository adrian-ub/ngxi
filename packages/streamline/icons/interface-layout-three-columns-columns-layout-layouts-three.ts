import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceLayoutThreeColumnsColumnsLayoutLayoutsThreeIcon],svg[streamline-interface-layout-three-columns-columns-layout-layouts-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="1"></svg:rect><svg:path d="M4.5.5v13m5-13v13"></svg:path></svg:g>`,
})
export class StreamlineInterfaceLayoutThreeColumnsColumnsLayoutLayoutsThreeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
