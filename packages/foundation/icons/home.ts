import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[foundationHomeIcon],svg[foundation-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M83.505 37.85L51.013 12.688a2.51 2.51 0 0 0-3.1.025L16.46 37.874a2.5 2.5 0 0 0-.939 1.956v45.5a2.504 2.504 0 0 0 2.505 2.505h18.697a2.506 2.506 0 0 0 2.505-2.505V57.471h21.54V85.33a2.505 2.505 0 0 0 2.505 2.505h18.7a2.506 2.506 0 0 0 2.505-2.505v-45.5a2.5 2.5 0 0 0-.973-1.98"></svg:path>`,
})
export class FoundationHomeIcon {
  readonly viewBox = input("0 0 100 100")
  readonly width = input("1em")
  readonly height = input("1em")
}
