import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiRugIcon],svg[mdi-rug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14c-1.1 0-2-.89-2-2s.9-2 2-2s2 .9 2 2s-.89 2-2 2m11 5H1v-2h3v-2H1v-2h3v-2H1V9h3V7H1V5h22v2h-3v2h3v2h-3v2h3v2h-3v2h3zm-11-3.08c.62.7 1.66.89 2.5.41s1.19-1.49.9-2.37c.91-.18 1.6-.99 1.6-1.96s-.69-1.78-1.6-1.96c.29-.88-.06-1.89-.9-2.37s-1.88-.29-2.5.41a1.995 1.995 0 0 0-3.39 1.96C7.69 10.22 7 11.03 7 12s.69 1.78 1.61 1.96A1.995 1.995 0 0 0 12 15.92"></svg:path>`,
})
export class MdiRugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
