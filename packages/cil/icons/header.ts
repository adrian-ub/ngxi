import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilHeaderIcon],svg[cil-header-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 496h480V16H16ZM48 48h416v416H48Z"></svg:path><svg:path fill="currentColor" d="M288 144h32v96H192v-96h32v-32H96v32h32v224H96v32h128v-32h-32v-96h128v96h-32v32h128v-32h-32V144h32v-32H288z"></svg:path>`,
})
export class CilHeaderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
