import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLambdaIcon],svg[tabler-lambda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 20l6.5-9m6.5 9C13 20 13 4 7 4"></svg:path>`,
})
export class TablerLambdaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
