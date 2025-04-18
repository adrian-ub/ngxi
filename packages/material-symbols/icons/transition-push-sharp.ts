import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTransitionPushSharpIcon],svg[material-symbols-transition-push-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20v-1.975h2V6H8V4h4v16zm6 0V4h9v16zm-9-4l-1.425-1.4L5.15 13H1v-2h4.15L3.575 9.425L5 8l4 4z"></svg:path>`,
})
export class MaterialSymbolsTransitionPushSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
