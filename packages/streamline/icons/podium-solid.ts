import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePodiumSolidIcon],svg[streamline-podium-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7 0a.75.75 0 0 1 .75.75V3h2.5L9.212 1.443L10.25 3h.42a4 4 0 0 0-.131-.513C10.32 1.835 10.002 1.5 9.5 1.5q-.154 0-.288-.057L8.75.75A.75.75 0 0 1 9.5 0c1.498 0 2.179 1.165 2.461 2.013c.119.354.188.702.228.987H13a.5.5 0 0 1 .49.598l-1 5A.5.5 0 0 1 12 9H9.5v3.5h.5a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1 0-1.5h.5V9H2a.5.5 0 0 1-.49-.402l-1-5A.5.5 0 0 1 1 3h.811c.04-.285.11-.633.227-.987C2.321 1.165 3.002 0 4.5 0a.75.75 0 1 1 0 1.5c-.502 0-.821.335-1.038.987c-.058.172-.1.348-.131.513H6.25V.75A.75.75 0 0 1 7 0m2.212 1.443A.75.75 0 0 1 8.75.75z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePodiumSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
