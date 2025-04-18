import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsHeadphonesOffIcon],svg[proicons-headphones-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M21.25 21.25L2.75 2.75"></svg:path><svg:path fill="currentColor" d="M17.75 21.25h1.5c.552 0 1.052-.224 1.414-.586L15.75 15.75v3.5a2 2 0 0 0 2 2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.25 17v-5A9.25 9.25 0 0 0 12 2.75c-1.433 0-2.79.326-4 .907M2.75 17.368V12a9.22 9.22 0 0 1 2.71-6.54m15.79 7.861H17.5m-14.75 0h4a1.5 1.5 0 0 1 1.5 1.5v4.429a2 2 0 0 1-2 2h-1.5a2 2 0 0 1-2-2zm15 7.929h1.5c.552 0 1.052-.224 1.414-.586L15.75 15.75v3.5a2 2 0 0 0 2 2"></svg:path></svg:g>`,
})
export class ProiconsHeadphonesOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
