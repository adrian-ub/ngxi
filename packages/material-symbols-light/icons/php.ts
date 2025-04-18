import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPhpIcon],svg[material-symbols-light-php-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.423 14.692V9.308h3.5q.37 0 .627.277q.258.276.258.646v1.654q0 .369-.258.627t-.627.257H4.308v1.923zm6.577 0V9.308h.885v2H13.5v-2h.885v5.384H13.5v-2.5h-2.615v2.5zm6.73 0V9.308h3.5q.37 0 .628.277q.257.276.257.646v1.654q0 .369-.257.627t-.627.257h-2.616v1.923zM4.309 11.885h2.615V10.23H4.308zm13.308 0h2.615V10.23h-2.616z"></svg:path>`,
})
export class MaterialSymbolsLightPhpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
