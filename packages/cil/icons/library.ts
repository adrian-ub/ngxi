import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilLibraryIcon],svg[cil-library-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M472 16H168a24 24 0 0 0-24 24v304a24 24 0 0 0 24 24h304a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24m-8 320H176V48h288Z"></svg:path><svg:path fill="currentColor" d="M112 400V80H80v328a24 24 0 0 0 24 24h328v-32Z"></svg:path><svg:path fill="currentColor" d="M48 464V144H16v328a24 24 0 0 0 24 24h328v-32Z"></svg:path>`,
})
export class CilLibraryIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
