import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsMentionIcon],svg[akar-icons-mention-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:circle cx="12" cy="12" r="4"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10c2.252 0 4.33-.744 6.001-2"></svg:path><svg:path stroke-linecap="round" d="M16 8v4c0 1 .6 3 3 3s3-2 3-3"></svg:path></svg:g>`,
})
export class AkarIconsMentionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
