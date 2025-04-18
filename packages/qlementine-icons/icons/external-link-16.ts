import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsExternalLink16Icon],svg[qlementine-icons-external-link-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 1.31a.5.5 0 0 0-.461-.309h-4a.5.5 0 0 0 0 1h2.79l-7.15 7.15a.5.5 0 0 0 .707.707l7.15-7.15v2.79a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.038-.188z"></svg:path><svg:path fill="currentColor" d="M3.5 3A2.5 2.5 0 0 0 1 5.5v7A2.5 2.5 0 0 0 3.5 15h7a2.5 2.5 0 0 0 2.5-2.5v-5a.5.5 0 0 0-1 0v5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 2 12.5v-7A1.5 1.5 0 0 1 3.5 4h5a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class QlementineIconsExternalLink16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
