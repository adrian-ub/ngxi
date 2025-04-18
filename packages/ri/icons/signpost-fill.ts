import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riSignpostFillIcon],svg[ri-signpost-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5V2h-2v3H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h13.414l4.293-4.293a1 1 0 0 0 0-1.414L17.414 5zm0 12h-2v5h2z"></svg:path>`,
})
export class RiSignpostFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
