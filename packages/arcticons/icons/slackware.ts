import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSlackwareIcon],svg[arcticons-slackware-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.302 27c0 4 4.821 4 7.538 4h2.622C32.783 31 35 28.75 35 26s-2.82-3.68-6.038-4.5l-3.924-1C21.82 19.68 19 18.75 19 16s2.217-5 5.538-5h2.622c2.717 0 7.538 0 7.538 4M11.5 31.5v5h25"></svg:path>`,
})
export class ArcticonsSlackwareIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
