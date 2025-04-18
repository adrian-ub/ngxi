import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiSortVariantLockOpenIcon],svg[mdi-sort-variant-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 17.3v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-2.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5v.5h-1.3v-.5c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V16h4.3c.6 0 1.2.6 1.2 1.3M3 13v-2h12v2zm0-7h18v2H3zm0 12v-2h6v2z"></svg:path>`,
})
export class MdiSortVariantLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
