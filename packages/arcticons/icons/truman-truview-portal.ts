import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTrumanTruviewPortalIcon],svg[arcticons-truman-truview-portal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.23 17.756l9.542 5.881V43.5H19.23zM41.064 6.41v8.619H10.466zM6.936 4.5h21.927L6.936 14.457z"></svg:path>`,
})
export class ArcticonsTrumanTruviewPortalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
