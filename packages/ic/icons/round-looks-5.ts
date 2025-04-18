import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundLooks5Icon],svg[ic-round-looks-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-5 6h-3v2h2c1.1 0 2 .9 2 2v2a2 2 0 0 1-2 2h-3c-.55 0-1-.45-1-1s.45-1 1-1h3v-2h-3c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h4c.55 0 1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class IcRoundLooks5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
