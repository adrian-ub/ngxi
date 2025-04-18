import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineButtonNextSolidIcon],svg[streamline-button-next-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.512 6.056L1.693.656C1.297.407.815.474.467.737A1.14 1.14 0 0 0 0 1.632v10.705c0 .884.979 1.456 1.693 1.004l7.82-5.367c.65-.439.65-1.48 0-1.919Zm4.238-4.314a1 1 0 1 0-2 0v10.516a1 1 0 0 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineButtonNextSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
