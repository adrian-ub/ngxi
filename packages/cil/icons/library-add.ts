import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilLibraryAddIcon],svg[cil-library-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 464V144H16v328a24.027 24.027 0 0 0 24 24h328v-32z"></svg:path><svg:path fill="currentColor" d="M144 400h-32V80H80v328a24.027 24.027 0 0 0 24 24h328v-32z"></svg:path><svg:path fill="currentColor" d="M472 16H168a24.027 24.027 0 0 0-24 24v304a24.027 24.027 0 0 0 24 24h304a24.027 24.027 0 0 0 24-24V40a24.027 24.027 0 0 0-24-24m-8 320H176V48h288Z"></svg:path><svg:path fill="currentColor" d="M304 288h32v-84h84v-32h-84V88h-32v84h-84v32h84z"></svg:path>`,
})
export class CilLibraryAddIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
