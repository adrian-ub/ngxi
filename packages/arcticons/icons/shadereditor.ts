import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsShadereditorIcon],svg[arcticons-shadereditor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m5.5 17.2l37-8m-27.8 9.7l-2 5.3l-2-5.3m9.5 4.3c-.3.6-1 1-1.7 1h0c-1.1 0-2-.9-2-2v-1.3c0-1.1.9-2 2-2h0c1.1 0 2 .9 2 2v.7h-4m9.4 1.6c-.3.6-1 1-1.7 1h0c-1.1 0-2-.9-2-2v-1.3c0-1.1.9-2 2-2h0c.7 0 1.4.4 1.7 1m11.4-4.8c-1.2 1.4-1.9 3.2-2 5.1c.1 1.9.8 3.7 2 5.1M19.2 37.9h4m-4-6.9l2-1.1m0 0v8"></svg:path><svg:circle cx="26" cy="37.9" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.8 27.8v12.5m2.5-20.1c1.1 0 2-.9 2-2h0c0-1.1-.9-2-2-2m0 8c1.1 0 2-.9 2-2h0c0-1.1-.9-2-2-2M28 23.5c.7.5 1.6.8 2.5.7h.8"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28 16.9c.7-.5 1.6-.8 2.5-.7h.8m-2 4h2"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsShadereditorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
