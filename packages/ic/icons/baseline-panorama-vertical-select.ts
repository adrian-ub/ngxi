import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselinePanoramaVerticalSelectIcon],svg[ic-baseline-panorama-vertical-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.93 21.12c-1.1-2.94-1.64-6.03-1.64-9.12s.55-6.18 1.64-9.12c.05-.11.07-.22.07-.31c0-.34-.24-.57-.64-.57H4.62c-.4 0-.63.23-.63.57c0 .1.02.2.06.31C5.16 5.82 5.7 8.91 5.7 12s-.55 6.18-1.64 9.12c-.05.11-.07.22-.07.31c0 .33.23.57.63.57h14.75c.39 0 .63-.24.63-.57c0-.1-.02-.2-.07-.31"></svg:path>`,
})
export class IcBaselinePanoramaVerticalSelectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
