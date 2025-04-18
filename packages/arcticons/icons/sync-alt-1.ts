import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSyncAlt1Icon],svg[arcticons-sync-alt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m27.42 5.867l-12.839 16.52a1 1 0 0 0 .79 1.613h25.7a.95.95 0 0 0 .75-1.534l-12.9-16.599a.95.95 0 0 0-1.501 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m20.58 42.133l12.839-16.52a1 1 0 0 0-.79-1.613h-25.7a.95.95 0 0 0-.75 1.534l12.9 16.599a.95.95 0 0 0 1.501 0"></svg:path>`,
})
export class ArcticonsSyncAlt1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
