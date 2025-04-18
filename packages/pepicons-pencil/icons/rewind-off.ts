import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRewindOffIcon],svg[pepicons-pencil-rewind-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M16.5 14.796L11.019 10L16.5 5.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.482-4.796c.646-.566 1.658-.106 1.658.753v9.592c0 .86-1.012 1.319-1.658.753z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.5 14.796L4.019 10L9.5 5.204zm-6.14-4.043a1 1 0 0 1 0-1.506l5.481-4.796c.647-.566 1.659-.106 1.659.753v9.592a1 1 0 0 1-1.659.753z" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPencilRewindOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
