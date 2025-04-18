import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDistributeVerticalSolidIcon],svg[teenyicons-distribute-vertical-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 0H0v1h15zm-1 5H1v5h13zm1 9H0v1h15z"></svg:path>`,
})
export class TeenyiconsDistributeVerticalSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
