import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightInsertPageBreakSharpIcon],svg[material-symbols-light-insert-page-break-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21v-4.5h14V21zm9-13h4l-4-4zm-4.808 6.5v-1h5.616v1zm7.616 0v-1h5.615v1zm-15.231 0v-1h5.615v1zM5 11.5V3h9.5L19 7.5v4z"></svg:path>`,
})
export class MaterialSymbolsLightInsertPageBreakSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
