import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceAudioDescriptionIcon],svg[guidance-audio-description-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m2.75 16.25l1.605-2.841m0 0L7.408 8H8.75v5.409m-4.395 0H4.25m.105 0H8.75m0 0V16.5m9.25-9s.5 1.5.5 4.5s-.5 4.5-.5 4.5m2.5-9S21 9 21 12s-.5 4.5-.5 4.5m-19 4S.5 17 .5 12s1-8.5 1-8.5h21s1 3.5 1 8.5s-1 8.5-1 8.5zM11 16V8h3.75c.644 0 1.25.522 1.25 1.167v5.666c0 .645-.606 1.167-1.25 1.167z"></svg:path>`,
})
export class GuidanceAudioDescriptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
