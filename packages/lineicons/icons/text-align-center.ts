import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsTextAlignCenterIcon],svg[lineicons-text-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.6 8.9h40.7c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H11.6c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3M7.8 25.8h48.4c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3H7.8c-1.2 0-2.3 1-2.3 2.3s1.1 2.3 2.3 2.3m7.7 12.4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h33.1c1.2 0 2.3-1 2.3-2.3s-1-2.3-2.3-2.3zM60 55.1H4c-1.2 0-2.3 1-2.3 2.3s1 2.3 2.3 2.3h56c1.2 0 2.3-1 2.3-2.3s-1.1-2.3-2.3-2.3"></svg:path>`,
})
export class LineiconsTextAlignCenterIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
