import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconHibernateIcon],svg[picon-hibernate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 0c5 0 5 8 0 8s-5-8 0-8v1C0 1 0 7 4 7s4-6 0-6M3 2h2v4H3"></svg:path>`,
})
export class PiconHibernateIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
