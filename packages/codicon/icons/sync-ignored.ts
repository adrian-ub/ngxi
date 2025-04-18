import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconSyncIgnoredIcon],svg[codicon-sync-ignored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="m5.468 3.687l-.757-.706a6 6 0 0 1 9.285 4.799L15.19 6.6l.75.76l-2.09 2.07l-.76-.01L11 7.31l.76-.76l1.236 1.25a5 5 0 0 0-7.528-4.113m4.55 8.889l.784.73a6 6 0 0 1-8.796-5.04L.78 9.5L0 8.73l2.09-2.07l.76.01l2.09 2.12l-.76.76l-1.167-1.18a5 5 0 0 0 7.005 4.206" clip-rule="evenodd"></svg:path><svg:path d="m1.123 2.949l.682-.732L13.72 13.328l-.682.732z"></svg:path></svg:g>`,
})
export class CodiconSyncIgnoredIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
