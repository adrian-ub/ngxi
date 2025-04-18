import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsTrophyLightIcon],svg[lets-icons-trophy-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" d="M16.5 20.5h-9"></svg:path><svg:path fill="currentColor" d="M12.5 18.5a.5.5 0 0 1-1 0zm-1 0V16h1v2.5z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M10.5 9.5h3m-8 5s-2-1.5-2-4v-2a2 2 0 0 1 2-2v0a2 2 0 0 1 2 2v1m11 5s2-1.5 2-4v-2a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1"></svg:path><svg:path stroke="currentColor" d="M16.5 11.36V7.5a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v3.86a4 4 0 0 0 1.781 3.328l2.164 1.442a1 1 0 0 0 1.11 0l2.164-1.442a4 4 0 0 0 1.781-3.329Z"></svg:path></svg:g>`,
})
export class LetsIconsTrophyLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
