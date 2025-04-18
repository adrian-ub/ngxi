import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerScriptMinusIcon],svg[tabler-script-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 19h4m-7 1H6a3 3 0 0 1 0-6h11a3 3 0 0 0-3 3m7-2V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v8"></svg:path>`,
})
export class TablerScriptMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
