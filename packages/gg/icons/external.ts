import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggExternalIcon],svg[gg-external-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.64 7.025h-3.622v-2h7v7h-2v-3.55l-4.914 4.914l-1.414-1.414z"></svg:path><svg:path d="M10.982 6.975h-6v12h12v-6h-2v4h-8v-8h4z"></svg:path></svg:g>`,
})
export class GgExternalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
