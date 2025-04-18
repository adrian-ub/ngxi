import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSamHelperIcon],svg[arcticons-sam-helper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27 24h14.26a1.24 1.24 0 0 0 1.24-1.24h0a9.25 9.25 0 0 0-18.332-1.752M21 24H6.74a1.24 1.24 0 0 0-1.24 1.24a9.25 9.25 0 0 0 18.336 1.735M24 27v14.25a1.24 1.24 0 0 0 1.23 1.25h.02a9.25 9.25 0 0 0 9.25-9.25h0a9.25 9.25 0 0 0-7.525-9.088M24 21V6.74a1.24 1.24 0 0 0-1.24-1.24h-.01a9.25 9.25 0 0 0-1.723 18.338"></svg:path><svg:circle cx="24" cy="24" r="3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsSamHelperIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
