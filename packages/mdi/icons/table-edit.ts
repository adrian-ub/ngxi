import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTableEditIcon],svg[mdi-table-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.7 13.35l-1 1l-2.05-2.05l1-1c.21-.22.56-.22.77 0l1.28 1.28c.22.21.22.56 0 .77M12 18.94l6.07-6.06l2.05 2.05L14.06 21H12zM4 2h14a2 2 0 0 1 2 2v4.17L16.17 12H12v4.17L10.17 18H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m0 4v4h6V6zm8 0v4h6V6zm-8 6v4h6v-4z"></svg:path>`,
})
export class MdiTableEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
