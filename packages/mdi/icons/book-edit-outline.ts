import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiBookEditOutlineIcon],svg[mdi-book-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20h5v2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6.3c-.22.12-.43.26-.61.44L18 12.13V4h-5v8l-2.5-2.25L8 12V4H6zm16.85-6.53l-1.32-1.32c-.2-.2-.53-.2-.72 0l-.98.98l2.04 2.04l.98-.98c.2-.19.2-.52 0-.72M13 19.96V22h2.04l6.13-6.12l-2.04-2.05z"></svg:path>`,
})
export class MdiBookEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
