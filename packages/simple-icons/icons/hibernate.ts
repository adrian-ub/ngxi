import { Component, input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'svg[simpleIconsHibernateIcon],svg[simple-icons-hibernate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.365 0L9.98 7.994h8.95L14.31 0zm-.431.248L.46 7.994l4.613 8.008L9.55 8.24zm13.992 7.75l-4.475 7.76l4.617 7.992l4.471-7.744zm-4.905 8.006l-8.95.002L9.688 24h8.946l-4.615-7.994l.001-.002Z"></svg:path>`
})
export class SimpleIconsHibernateIcon {

  readonly viewBox = input("0 0 24 24");
  readonly width = input("1em");
  readonly height = input("1em");
}
