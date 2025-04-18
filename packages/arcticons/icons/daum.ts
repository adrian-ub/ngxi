import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDaumIcon],svg[arcticons-daum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.85 13.594c5.747 0 10.406 4.659 10.406 10.406s-4.66 10.406-10.407 10.406h-8.093V13.594z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.838 42.5H6.662v-37h16.176c10.217 0 18.5 8.283 18.5 18.5s-8.283 18.5-18.5 18.5"></svg:path>`,
})
export class ArcticonsDaumIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
