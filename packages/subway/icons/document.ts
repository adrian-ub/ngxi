import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayDocumentIcon],svg[subway-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M372.4 512L512 372.4H372.4zM0 0v512h349.1V349.1H512V0z"></svg:path>`,
})
export class SubwayDocumentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
