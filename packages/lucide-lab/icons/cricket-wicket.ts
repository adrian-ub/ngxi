import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLabCricketWicketIcon],svg[lucide-lab-cricket-wicket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m6 2l4 2m4-1l4-1"></svg:path><svg:circle cx="12" cy="13" r="2"></svg:circle><svg:path d="M6 7v15m7-15l-.3 4.1m-.2 3.8L12 22m6-15v15"></svg:path></svg:g>`,
})
export class LucideLabCricketWicketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
