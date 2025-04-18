import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDoorClosedIcon],svg[mdi-door-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 11h2v2h-2zm-4-8h7c1.11 0 2 .89 2 2v14h1v2H2v-2h8V5c0-1.11.89-2 2-2m0 2v14h7V5z"></svg:path>`,
})
export class MdiDoorClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
