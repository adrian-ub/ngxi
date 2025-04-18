import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCreativeappIcon],svg[arcticons-creativeapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.746 45c-3.15-.038-16.517-7.973-18.06-10.72s-1.353-18.291.254-21S21.104 2.962 24.255 3s16.517 7.973 18.06 10.72s1.353 18.291-.255 21S26.897 45.038 23.747 45"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.96 34.99l-9.339-5.558V18.315l9.339-5.558l9.339 5.558V29.43Zm9.339-16.675l10.069 5.936m-28.747-5.936l.025-11.276M23.96 34.99l-9.86 5.658"></svg:path>`,
})
export class ArcticonsCreativeappIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
