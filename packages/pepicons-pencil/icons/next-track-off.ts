import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilNextTrackOffIcon],svg[pepicons-pencil-next-track-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3.5 14.796L8.981 10L3.5 5.204zm6.14-4.043a1 1 0 0 0 0-1.506L4.159 4.451c-.647-.566-1.659-.106-1.659.753v9.592a1 1 0 0 0 1.659.753z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M10.5 14.796L15.981 10L10.5 5.204zm6.14-4.043a1 1 0 0 0 0-1.506l-5.482-4.796c-.646-.566-1.658-.106-1.658.753v9.592a1 1 0 0 0 1.659.753z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17 4.5a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilNextTrackOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
