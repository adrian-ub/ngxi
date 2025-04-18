import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMarkAsUnreadSharpIcon],svg[material-symbols-light-mark-as-unread-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16.616V7l8-4l8.896 4.539h-2.182L11 4.135L4 7.61v9.006zM5.77 20V9.308H21V20zm7.615-5.265L20 11.385v-1.077l-6.616 3.35l-6.615-3.35v1.077z"></svg:path>`,
})
export class MaterialSymbolsLightMarkAsUnreadSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
