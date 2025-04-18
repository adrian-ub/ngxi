import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAppDiscoverIcon],svg[oui-app-discover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.33 23.67l4.79-10.55l10.55-4.79l-4.79 10.55zm6.3-9l-2.28 5l5-2.28l2.28-5z" class="ouiIcon__fillSecondary"></svg:path><svg:path fill="currentColor" d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16s16-7.163 16-16A16 16 0 0 0 16 0m1 29.95V28h-2v1.95A14 14 0 0 1 2.05 17H4v-2H2.05A14 14 0 0 1 15 2.05V4h2V2.05A14 14 0 0 1 29.95 15H28v2h1.95A14 14 0 0 1 17 29.95"></svg:path>`,
})
export class OuiAppDiscoverIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
