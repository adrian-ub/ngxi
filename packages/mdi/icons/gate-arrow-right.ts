import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGateArrowRightIcon],svg[mdi-gate-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6v5h-2V7h-2v4H9V9H7v12h2v-2h2v2h1.09c-.06-.33-.09-.66-.09-1c0-1.18.35-2.33 1-3.31V13h2v1.81c.62-.36 1.3-.6 2-.72V13h2v1.09c.7.12 1.38.36 2 .72V13h1v-2h-1V6h-2v5h-2V6zm-6 7h2v4H9zm10 4v2h-4v2h4v2l3-3z"></svg:path>`,
})
export class MdiGateArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
