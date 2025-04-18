import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTv8Icon],svg[arcticons-tv8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M12.01 20h5.2m-2.6 8v-8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.21 20l-2.6 8l-2.6-8m12.58 4c-1.1 0-2 .9-2 2s.9 2 2 2h1.3c1.1 0 2-.9 2-2s-.9-2-2-2m.1 0c1.1 0 2-.9 2-2s-.9-2-2-2h-1.3c-1.1 0-2 .9-2 2s.9 2 2 2m-.1 0h1.4"></svg:path>`,
})
export class ArcticonsTv8Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
