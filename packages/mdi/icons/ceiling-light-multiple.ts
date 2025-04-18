import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCeilingLightMultipleIcon],svg[mdi-ceiling-light-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 11h3V6h2v5h3l4 8H6zm6 9c0 1.11-.89 2-2 2s-2-.89-2-2zm-7.79-9.89L8.76 9H11V2H9v5H6l-4 8h3.76z"></svg:path>`,
})
export class MdiCeilingLightMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
