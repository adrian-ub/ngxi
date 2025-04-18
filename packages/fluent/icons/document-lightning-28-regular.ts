import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDocumentLightning28RegularIcon],svg[fluent-document-lightning-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.4 2A2.4 2.4 0 0 0 4 4.4v8.842c.238-.155.52-.242.816-.242H5.5V4.4a.9.9 0 0 1 .9-.9H14V10a2 2 0 0 0 2 2h6.5v11.6a.9.9 0 0 1-.9.9H8.623L7.332 26H21.6a2.4 2.4 0 0 0 2.4-2.4V11.578c0-.729-.29-1.428-.805-1.944l-6.93-6.931a2.4 2.4 0 0 0-1.7-.703zm15.539 8.5h-5.94a.5.5 0 0 1-.5-.5V4.06zM4.817 14h6.329a.5.5 0 0 1 .435.745L9.751 18h1.514a.75.75 0 0 1 .569 1.24l-6.416 7.452c-.522.606-1.499.052-1.246-.707L5.5 22h-4a.5.5 0 0 1-.451-.714l3.316-7A.5.5 0 0 1 4.817 14"></svg:path>`,
})
export class FluentDocumentLightning28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
