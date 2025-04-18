import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCarBackIcon],svg[mdi-car-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 11l1-4h10l1 4m.92-5c-.21-.6-.78-1-1.42-1h-11c-.64 0-1.21.4-1.42 1L3 12v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h12v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-8zM7 16H5v-2h2zm12 0h-2v-2h2zm-5 0h-4v-2h4z"></svg:path>`,
})
export class MdiCarBackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
