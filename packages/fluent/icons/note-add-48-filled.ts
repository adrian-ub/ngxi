import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentNoteAdd48FilledIcon],svg[fluent-note-add-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 13c0 6.075-4.925 11-11 11S2 19.075 2 13S6.925 2 13 2s11 4.925 11 11M14 6a1 1 0 1 0-2 0v6H6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6zm-1 20c7.18 0 13-5.82 13-13c0-2.577-.75-4.98-2.044-7H35.75A6.25 6.25 0 0 1 42 12.25V26h-9.75A6.25 6.25 0 0 0 26 32.25V42H12.25A6.25 6.25 0 0 1 6 35.75V23.956A12.94 12.94 0 0 0 13 26m28.447 2.5H32.25a3.75 3.75 0 0 0-3.75 3.75v9.197a6.3 6.3 0 0 0 1.848-1.278l9.821-9.82a6.3 6.3 0 0 0 1.278-1.849"></svg:path>`,
})
export class FluentNoteAdd48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
