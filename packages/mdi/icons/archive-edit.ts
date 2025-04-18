import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveEditIcon],svg[mdi-archive-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10.3V8H4v13h7v-1.87l8.39-8.39c.18-.18.39-.32.61-.44M15 13H9v-1.5c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5zm6-6H3V3h18zm1.85 7.19l-.98.98l-2.04-2.04l.98-.98c.19-.2.52-.2.72 0l1.32 1.32c.2.2.2.53 0 .72m-3.72-.36l2.04 2.04L15.04 22H13v-2.04z"></svg:path>`,
})
export class MdiArchiveEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
