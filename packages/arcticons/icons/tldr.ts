import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTldrIcon],svg[arcticons-tldr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.204 30.247c.98 1.277 2.211 1.753 3.923 1.753h2.369a3.996 3.996 0 0 0 3.991-4h0c0-2.21-1.787-4-3.991-4h-2.618a3.996 3.996 0 0 1-3.991-4h0c0-2.21 1.787-4 3.991-4h2.37c1.71 0 2.941.476 3.922 1.753M17.187 34V14m8.326 20h10.6"></svg:path>`,
})
export class ArcticonsTldrIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
