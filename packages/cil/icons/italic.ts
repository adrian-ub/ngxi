import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilItalicIcon],svg[cil-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 496h480V16H16ZM48 48h416v416H48Z"></svg:path><svg:path fill="currentColor" d="M200 143.998h44.442l-42 224H152v32h160v-32h-44.442l42-224H360v-32H200z"></svg:path>`,
})
export class CilItalicIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
