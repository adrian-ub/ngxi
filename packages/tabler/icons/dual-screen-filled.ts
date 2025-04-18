import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerDualScreenFilledIcon],svg[tabler-dual-screen-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-5v2a1 1 0 0 1-1.351.936l-8-3A1 1 0 0 1 4 19V4a1 1 0 0 1 .212-.616l.068-.079l.078-.072l.066-.05l.092-.058l.065-.033l.1-.04l.099-.028l.046-.01l.108-.013L5 3zm-5.649 3.064A1 1 0 0 1 14 7v11h4V5h-7.486z"></svg:path>`,
})
export class TablerDualScreenFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
