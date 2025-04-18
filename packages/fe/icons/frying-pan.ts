import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feFryingPanIcon],svg[fe-frying-pan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18.268a2 2 0 1 1-2 0v-2.339A7.002 7.002 0 0 1 12 2a7 7 0 0 1 1 13.93zM12 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10"></svg:path>`,
})
export class FeFryingPanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
