import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilFigmaSolidIcon],svg[basil-figma-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.555 3.305A2.75 2.75 0 0 1 8.5 2.5h2.75V8H8.5a2.75 2.75 0 0 1-1.945-4.695M15.5 8h-2.75V2.5h2.75a2.75 2.75 0 0 1 0 5.5m0 1.5a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m-8.945 7.806A2.75 2.75 0 0 1 8.5 16.5h2.75v2.75a2.75 2.75 0 1 1-4.695-1.945M8.5 9.5a2.75 2.75 0 1 0 0 5.5h2.75V9.5z"></svg:path>`,
})
export class BasilFigmaSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
