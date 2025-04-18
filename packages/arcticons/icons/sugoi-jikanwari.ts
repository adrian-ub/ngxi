import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSugoiJikanwariIcon],svg[arcticons-sugoi-jikanwari-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29c-2.2 0-4 1.8-4 4v29c0 2.2 1.8 4 4 4h29c2.2 0 4-1.8 4-4v-29c0-2.2-1.8-4-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.3 37.5H14.7c-2.3 0-4.1-1.9-4.1-4.1V14.7c0-2.3 1.9-4.1 4.1-4.1h18.7c2.3 0 4.1 1.9 4.1 4.1v18.7c0 2.2-1.9 4.1-4.2 4.1M5.5 14.8h5m-5 9.2h5m-5 9.2h5M33.2 5.5v5m-9.2-5v5m-9.2-5v5m18.4 27v5m-9.2-5v5m-9.2-5v5m22.7-27.7h5m-5 9.2h5m-5 9.2h5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.031 17.5v8.031a4.969 4.969 0 1 0 9.938 0V17.5m-11.813 0h3.75m6.188 0h3.75"></svg:path>`,
})
export class ArcticonsSugoiJikanwariIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
