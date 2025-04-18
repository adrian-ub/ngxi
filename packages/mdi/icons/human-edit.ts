import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiHumanEditIcon],svg[mdi-human-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.07 14.88l2.05 2.05L15.06 23H13v-2.06zm1.97-1.75c.14 0 .27.06.38.17l1.28 1.28c.22.21.22.56 0 .77l-1 1l-2.05-2.05l1-1c.11-.11.25-.17.39-.17M21 9h-6v7l-2 2v-2h-2v6H9V9H3V7h18zm-9-7c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2"></svg:path>`,
})
export class MdiHumanEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
