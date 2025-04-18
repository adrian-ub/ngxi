import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignFileUnlockedIcon],svg[tdesign-file-unlocked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1h12.414L21 6.586V11h-2V9h-6V3H5v18h6.5v2H3zm12 2.414V7h3.586zM18 14.5c-.69 0-1.25.56-1.25 1.25v.75h5.749V23h-9v-6.5h1.251v-.75a3.25 3.25 0 0 1 5.541-2.305l.71.705l-1.41 1.418l-.71-.705A1.24 1.24 0 0 0 18 14.5m-2.501 4V21h5v-2.5z"></svg:path>`,
})
export class TdesignFileUnlockedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
