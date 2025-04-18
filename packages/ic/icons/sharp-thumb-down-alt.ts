import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpThumbDownAltIcon],svg[ic-sharp-thumb-down-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11.6V16h8.31l-1.12 5.38L9.83 23L17 15.82V3H4.69zM19 3h4v12h-4z"></svg:path>`,
})
export class IcSharpThumbDownAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
