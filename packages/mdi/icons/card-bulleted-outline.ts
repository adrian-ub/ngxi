import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiCardBulletedOutlineIcon],svg[mdi-card-bulleted-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15h-2v-2h2zm6 0h-4v-2h4zM8 11H6V9h2zm10 0h-8V9h8zm2 9H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M4 6v12h16V6z"></svg:path>`,
})
export class MdiCardBulletedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
