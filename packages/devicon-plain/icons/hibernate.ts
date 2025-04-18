import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconPlainHibernateIcon],svg[devicon-plain-hibernate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.246 3.766l23.168 40.129l-23.18 40.19l-23.156-40.19Zm69.508 120.468L75.586 84.105l23.18-40.19l23.156 40.19ZM75.594 3.766H29.258L52.43 43.898h46.35ZM52.406 124.23H98.75L75.594 84.102H29.219Zm0 0"></svg:path>`,
})
export class DeviconPlainHibernateIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
