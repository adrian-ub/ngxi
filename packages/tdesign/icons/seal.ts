import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignSealIcon],svg[tdesign-seal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".9" d="M6.5 7a5.5 5.5 0 1 1 11 0c0 1.707-.78 3.555-1.984 4.831c-.217.23-.362.457-.442.669H20a2 2 0 0 1 2 2v5H2v-5a2 2 0 0 1 2-2h4.926a2.1 2.1 0 0 0-.442-.669C7.28 10.555 6.5 8.707 6.5 7M12 3.5A3.5 3.5 0 0 0 8.5 7c0 1.157.557 2.524 1.439 3.46c.546.579 1.061 1.41 1.061 2.416V13a1.5 1.5 0 0 1-1.5 1.5H4v3h16v-3h-5.5A1.5 1.5 0 0 1 13 13v-.124c0-1.005.515-1.837 1.061-2.417C14.943 9.524 15.5 8.157 15.5 7A3.5 3.5 0 0 0 12 3.5m-10 17h20v2H2z"></svg:path>`,
})
export class TdesignSealIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
