import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSpaceInvadersIcon],svg[mdi-space-invaders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6H5V4h2zm10 0h2V4h-2zm6 6v6h-2v-4h-2v4h-2v-2H7v2H5v-4H3v4H1v-6h2v-2h2V8h2V6h2v2h6V6h2v2h2v2h2v2zm-8-2v2h2v-2zm-8 2h2v-2H7zm4 6H7v2h4zm6 0h-4v2h4z"></svg:path>`,
})
export class MdiSpaceInvadersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
