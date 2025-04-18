import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSweepIcon],svg[material-symbols-sweep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18v-2h6v2zm-3.95 0l-5.7-5.695l1.425-1.43L6.05 15.15l9.172-9.175L16.65 7.4zM14 14v-2h6v2zm4-4V8h6v2z"></svg:path>`,
})
export class MaterialSymbolsSweepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
