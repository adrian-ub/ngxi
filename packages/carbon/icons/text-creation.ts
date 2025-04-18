import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTextCreationIcon],svg[carbon-text-creation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 22.14V9.86A4 4 0 1 0 22.14 5H9.86A4 4 0 1 0 5 9.86v12.28A4 4 0 1 0 9.86 27h12.28A4 4 0 1 0 27 22.14M26 4a2 2 0 1 1-2 2a2 2 0 0 1 2-2M4 6a2 2 0 1 1 2 2a2 2 0 0 1-2-2m2 22a2 2 0 1 1 2-2a2 2 0 0 1-2 2m16.14-3H9.86A4 4 0 0 0 7 22.14V9.86A4 4 0 0 0 9.86 7h12.28A4 4 0 0 0 25 9.86v12.28A4 4 0 0 0 22.14 25M26 28a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M21 11H11v2h4v9h2v-9h4z"></svg:path>`,
})
export class CarbonTextCreationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
