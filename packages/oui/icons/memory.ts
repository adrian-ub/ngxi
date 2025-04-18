import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiMemoryIcon],svg[oui-memory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M7 10h2V6H7zm-4 0h2V6H3zm8.025 0h2V6h-2zM3.5 13.75h1v-2.4h-1zm2.675 0h1.001v-2.4H6.175zm2.675 0h1v-2.4h-1zm2.675 0h1v-2.4h-1z"></svg:path><svg:path d="M0 3v7.05h1v3.698h1v-3.699h12v3.699h1v-3.699h1V3zm1 6h14V4H1z"></svg:path></svg:g>`,
})
export class OuiMemoryIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
