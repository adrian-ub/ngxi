import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vaadinParagraphIcon],svg[vaadin-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 0C3 0 1 2 1 4.5S3 9 5.5 9H8v7h2V2h1v14h2V2h2V0z"></svg:path>`,
})
export class VaadinParagraphIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
