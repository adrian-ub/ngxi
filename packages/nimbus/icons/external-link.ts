import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusExternalLinkIcon],svg[nimbus-external-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.21 1.5H10v1.25h3.08L7.9 7.21l.82 1l5.53-4.77V7h1.25V2.79a1.29 1.29 0 0 0-1.29-1.29"></svg:path><svg:path fill="currentColor" d="M12.25 13.25H1.75v-8.5H7.5V3.5h-6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4h-1.25z"></svg:path>`,
})
export class NimbusExternalLinkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
