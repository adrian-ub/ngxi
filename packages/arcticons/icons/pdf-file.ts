import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPdfFileIcon],svg[arcticons-pdf-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.5 15.5h-9a2 2 0 0 1-2-2v-9h-18a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h27a2 2 0 0 0 2-2zm-11-11l11 11"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.939 24.535h4.492m-4.492 4.482h2.931m-2.931-4.482V33.5m-16.369-.017v-8.966h3.017a3.009 3.009 0 0 1 .002 6.018h-3.02m8.185 2.965v-9h1.526a4.5 4.5 0 0 1 4.5 4.5h0a4.5 4.5 0 0 1-4.5 4.5z"></svg:path>`,
})
export class ArcticonsPdfFileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
