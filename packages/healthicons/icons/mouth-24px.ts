import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMouth24pxIcon],svg[healthicons-mouth-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 6.668C7 4 3.5 9.134 2 12.218C3.5 14.683 7.6 19 12 19s8.5-4.316 10-6.783C20.5 9.134 17 4 12 6.667M12 14c4.418 0 8-.672 8-1.5S16.418 11 12 11s-8 .672-8 1.5S7.582 14 12 14" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsMouth24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
