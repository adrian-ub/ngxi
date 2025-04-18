import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidInternalExpansionIcon],svg[icon-park-solid-internal-expansion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 42h32a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M42 8a2 2 0 0 0-2-2H28v14h14z" clip-rule="evenodd"></svg:path><svg:path d="m13 35l10-10m0 0v7m0-7h-7"></svg:path></svg:g>`,
})
export class IconParkSolidInternalExpansionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
