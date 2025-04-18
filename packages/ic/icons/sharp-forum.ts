import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpForumIcon],svg[ic-sharp-forum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6h-3v9H6v3h12l4 4zm-5 7V2H2v15l4-4z"></svg:path>`,
})
export class IcSharpForumIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
