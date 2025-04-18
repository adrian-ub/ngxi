import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOsmandPlusIcon],svg[arcticons-osmand-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24.088" cy="22.074" r="11.687" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.754 3.196C12.661 4.804 6.428 11.316 5 17.46c-2.534 10.4 3.737 20.912 14.094 23.622a3 3 0 0 1 1.398.87l3.236 3.405a.5.5 0 0 0 .7 0l3.246-3.406c.38-.412.868-.71 1.408-.859C39.547 38.24 45.718 27.445 42.866 16.98S29.22.344 18.754 3.196m.839 18.878h8.99m-4.495-4.495v8.99"></svg:path>`,
})
export class ArcticonsOsmandPlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
