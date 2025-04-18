import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggScreenShotIcon],svg[gg-screen-shot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 8V6H8v4h2V8zm2 6h2v4h-4v-2h2z"></svg:path><svg:path fill-rule="evenodd" d="M4 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm2 17V4h12v16z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgScreenShotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
