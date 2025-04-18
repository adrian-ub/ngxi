import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiWsEssentialsIcon],svg[oui-ws-essentials-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.552 11.929h.734V8.357h1.428v3.572h.734c.094-.859.532-1.567 1.243-2.341c.08-.088.594-.62.655-.695a4.286 4.286 0 1 0-6.693-.001c.061.076.576.609.655.695c.712.775 1.15 1.483 1.244 2.342m.02 1.428v.714h2.857v-.714H6.57ZM3.538 9.785a5.714 5.714 0 1 1 8.922.002c-.444.552-1.604 1.427-1.604 2.499v1.785c0 .79-.64 1.429-1.428 1.429H6.57c-.789 0-1.428-.64-1.428-1.429v-1.785c0-1.072-1.161-1.948-1.604-2.5Z"></svg:path>`,
})
export class OuiWsEssentialsIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
