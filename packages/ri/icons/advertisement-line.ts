import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAdvertisementLineIcon],svg[ri-advertisement-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.598 16l-3.2-8h-2l-2 5v.002L4.199 16h2.154l.4-1h3.29l.4 1zm-5.046-3l.847-2.115L9.244 13zM17 8h2v8h-3a3 3 0 1 1 0-6h1zm-1 4a1 1 0 0 0 0 2h1v-2zm5-9H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M4 19V5h16v14z"></svg:path>`,
})
export class RiAdvertisementLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
