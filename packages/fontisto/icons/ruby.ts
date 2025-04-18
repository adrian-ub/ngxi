import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoRubyIcon],svg[fontisto-ruby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.28 7.906l-.014-.014l-2.96 2.96l7.186 7.174l2.96-2.946l4.226-4.226l-2.96-2.96V7.88H6.266z"></svg:path><svg:path fill="currentColor" d="M10.466 0L0 6v12l10.466 6l10.466-6V6zm8.466 16.854l-8.466 4.88L2 16.854V7.12l8.466-4.88l8.466 4.88z"></svg:path>`,
})
export class FontistoRubyIcon {
  readonly viewBox = input("0 0 21 24")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
