import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTrophyIcon],svg[lets-icons-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16.5 20.5h-9"></svg:path><svg:path fill="currentColor" d="M13 18.5a1 1 0 1 1-2 0zm-2 0V16h2v2.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M10.5 9.5h3m-8 5s-2-1.5-2-4v-2a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v1m11 5s2-1.5 2-4v-2a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M16.5 11.36V7.5a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v3.86a4 4 0 0 0 1.781 3.328l2.164 1.442a1 1 0 0 0 1.11 0l2.164-1.442a4 4 0 0 0 1.781-3.329Z"></svg:path></svg:g>`,
})
export class LetsIconsTrophyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
