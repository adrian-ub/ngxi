import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCastle7Icon],svg[tdesign-castle-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1v1.083c2.838.476 5 2.944 5 5.917h4v14H2V8h4a6 6 0 0 1 5-5.917V1zM8 8h8a4 4 0 0 0-8 0m-4 4.535A4 4 0 0 1 6 12a4 4 0 0 1 3 1.354A4 4 0 0 1 12 12a4 4 0 0 1 3 1.354A4 4 0 0 1 18 12c.729 0 1.412.195 2 .535V10H4zM8 16a2 2 0 1 0-4 0v4h4zm2 4h4v-4a2 2 0 1 0-4 0zm6 0h4v-4a2 2 0 1 0-4 0z"></svg:path>`,
})
export class TdesignCastle7Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
