import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDesktopDeleteSolidIcon],svg[streamline-desktop-delete-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.76 1.338A.75.75 0 1 0 12.7.278l-1.72 1.72L9.26.277a.75.75 0 0 0-1.06 1.06l1.72 1.72l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72l1.72 1.72a.75.75 0 0 0 1.06-1.06l-1.719-1.72l1.72-1.72ZM8.516 11H12.5A1.5 1.5 0 0 0 14 9.5v-1a1 1 0 1 0-2 0V9H2V3h3.5a1 1 0 0 0 0-2h-4A1.5 1.5 0 0 0 0 2.5v7A1.5 1.5 0 0 0 1.5 11h3.985l-.537 1.5H4A.75.75 0 0 0 4 14h6a.75.75 0 0 0 0-1.5h-.948z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineDesktopDeleteSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
