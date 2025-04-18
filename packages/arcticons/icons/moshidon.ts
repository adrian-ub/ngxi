import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMoshidonIcon],svg[arcticons-moshidon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="35.157" cy="25.74" r="4.993"></svg:circle><svg:path d="M17.917 26.765v-6.464a5.034 5.034 0 0 0-5.034-5.034h0A5.034 5.034 0 0 0 7.849 20.3v10.432M17.917 20.3a5.034 5.034 0 0 1 5.033-5.033h0a5.034 5.034 0 0 1 5.034 5.034h0v10.432"></svg:path></svg:g>`,
})
export class ArcticonsMoshidonIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
