import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8DocumentIcon],svg[icons8-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v26h20V9.594l-.28-.313l-6-6l-.314-.28H6zm2 2h10v6h6v16H8zm12 1.438L22.563 9H20zM11 13v2h10v-2zm0 4v2h10v-2zm0 4v2h10v-2z"></svg:path>`,
})
export class Icons8DocumentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
