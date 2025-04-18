import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilBoltIcon],svg[cil-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m331.464 192l77-176H147.879l-81 288H187.9l-39.53 192h58.851l268.235-304ZM192.779 464h-5.149l39.529-192H109.121l63-224h187.415l-77 176h122.009Z"></svg:path>`,
})
export class CilBoltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
