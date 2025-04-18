import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsPayloadcmsIcon],svg[simple-icons-payloadcms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.068 0L22.08 6.625v12.573L13.787 24V11.427L2.769 4.808zM1.92 18.302l8.31-4.812v9.812z"></svg:path>`,
})
export class SimpleIconsPayloadcmsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
