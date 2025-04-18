import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilTabletIcon],svg[cil-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M440 16H80a24.03 24.03 0 0 0-24 24v432a24.03 24.03 0 0 0 24 24h360a24.03 24.03 0 0 0 24-24V40a24.03 24.03 0 0 0-24-24m-8 448H88v-96h344Zm0-128H88V48h344Z"></svg:path><svg:path fill="currentColor" d="M232 400h32v32h-32z"></svg:path>`,
})
export class CilTabletIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
