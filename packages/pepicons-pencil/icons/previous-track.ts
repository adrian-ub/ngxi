import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilPreviousTrackIcon],svg[pepicons-pencil-previous-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M16.5 14.796L11.019 10L16.5 5.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592c0 .86-1.012 1.319-1.658.753z"></svg:path><svg:path d="M9.5 14.796L4.019 10L9.5 5.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592c0 .86-1.012 1.319-1.658.753z"></svg:path><svg:path d="M3 4.5a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"></svg:path></svg:g>`,
})
export class PepiconsPencilPreviousTrackIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
