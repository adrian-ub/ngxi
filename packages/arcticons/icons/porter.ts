import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPorterIcon],svg[arcticons-porter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.288 18.788C38.288 32.126 24 43.5 24 43.5S9.712 32.126 9.712 18.788C9.712 10.897 16.11 4.5 24 4.5s14.288 6.397 14.288 14.288"></svg:path><svg:circle cx="24" cy="18.788" r="8.072" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsPorterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
