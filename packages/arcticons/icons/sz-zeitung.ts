import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSzZeitungIcon],svg[arcticons-sz-zeitung-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.802 29.954c.935 1.218 2.108 1.671 3.739 1.671h2.258a3.804 3.804 0 0 0 3.804-3.804v-.017A3.805 3.805 0 0 0 18.799 24h-2.49a3.81 3.81 0 0 1-3.809-3.808h0a3.816 3.816 0 0 1 3.817-3.817h2.245c1.631 0 2.804.454 3.739 1.67m3.312-1.507H35.5l-9.887 14.924H35.5"></svg:path>`,
})
export class ArcticonsSzZeitungIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
