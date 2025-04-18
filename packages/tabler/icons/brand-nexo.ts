import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandNexoIcon],svg[tabler-brand-nexo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m17 3l5 3v12l-5 3l-10-6V9l10 6V9l-5-3z"></svg:path><svg:path d="M12 6L7 3L2 6v12l5 3l4.7-3.13"></svg:path></svg:g>`,
})
export class TablerBrandNexoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
