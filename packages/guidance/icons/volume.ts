import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceVolumeIcon],svg[guidance-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M17 6.5a5.5 5.5 0 1 1 0 11m0-8a2.5 2.5 0 0 1 0 5m-2.5 7h-.25l-.523-.548A16 16 0 0 0 2.154 16H1.5V8h.654a16 16 0 0 0 11.573-4.952l.523-.548h.25z"></svg:path>`,
})
export class GuidanceVolumeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
