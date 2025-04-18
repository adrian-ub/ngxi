import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiLandmarkIcon],svg[maki-landmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 12H12v-.5c0-.3-.2-.5-.5-.5H11V6h1l1-2q-1.5.15-3 0c-.8-.6-1.4-1.2-2-2v-.5c0-.3-.2-.5-.5-.5s-.5.2-.5.5V2c-.6.8-1.2 1.4-2 2q-1.5.15-3 0l1 2h1v5h-.5c-.3 0-.5.2-.5.5v.5h-.5c-.3 0-.5.2-.5.5v.5h11v-.5c0-.3-.2-.5-.5-.5M7 11H5V6h2zm3 0H8V6h2z"></svg:path>`,
})
export class MakiLandmarkIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
