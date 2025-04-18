import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCursorClickIcon],svg[proicons-cursor-click-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12.394 20.734c-.757.985-2.332.471-2.362-.771l-.239-9.86a1.317 1.317 0 0 1 2.003-1.157l8.42 5.137c1.06.647.718 2.268-.513 2.431l-3.987.527c-.346.046-.66.227-.872.503z"></svg:path><svg:path stroke-linecap="round" d="M3.797 8.75h2.5m3.75-3.502v-2.5M6.815 5.765L5.047 3.998m8.232 1.767l1.768-1.767"></svg:path></svg:g>`,
})
export class ProiconsCursorClickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
