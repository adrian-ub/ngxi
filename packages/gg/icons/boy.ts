import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggBoyIcon],svg[gg-boy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9 14a1 1 0 1 0 0-2a1 1 0 0 0 0 2m7-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-2a8 8 0 0 0 7.634-10.4c-.835.226-1.713.346-2.619.346a10 10 0 0 1-8.692-5.053A8 8 0 0 0 12 20" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgBoyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
