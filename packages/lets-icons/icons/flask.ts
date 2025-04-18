import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFlaskIcon],svg[lets-icons-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M15 9v9a3 3 0 0 1-6 0V9"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9h10"></svg:path><svg:path fill="currentColor" d="M13 18v-2.945a.055.055 0 0 0-.055-.055h-1.89a.055.055 0 0 0-.055.055V18a1 1 0 1 0 2 0"></svg:path><svg:circle cx="15" cy="4" r="1" fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:circle cx="8.5" cy="5.5" r="1" fill="currentColor" stroke="currentColor" stroke-linejoin="round"></svg:circle></svg:g>`,
})
export class LetsIconsFlaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
