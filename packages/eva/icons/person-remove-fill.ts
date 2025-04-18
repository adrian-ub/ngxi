import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaPersonRemoveFillIcon],svg[eva-person-remove-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m-11 5a4 4 0 1 0-4-4a4 4 0 0 0 4 4m6 10a1 1 0 0 0 1-1a7 7 0 0 0-14 0a1 1 0 0 0 1 1"></svg:path>`,
})
export class EvaPersonRemoveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
