import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPinnedShortcutsIcon],svg[arcticons-pinned-shortcuts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.979 4.5h19.797v4.092h-2.029v15.32l4.058 3.988v3.918H25.522V43.5h-3.253V31.818H12.195v-4.023l3.813-3.813V8.593h-2.029z"></svg:path>`,
})
export class ArcticonsPinnedShortcutsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
