import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharp60fpsIcon],svg[ic-sharp-60fps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8v8h-4V8zm3-3H12v14h10zM10 8V5H2v14h9v-9H5V8zm-2 5v3H5v-3z"></svg:path>`,
})
export class IcSharp60fpsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
