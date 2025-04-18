import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhAwstatsIcon],svg[whh-awstats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H64q-26 0-45-18.5T0 960t19-45.5T64 896h896q26 0 45 18.5t19 45t-19 45.5t-45 19m-32-192H64l176-330q5-9 16-12.5t21 .5v-1q-4-3-3-3q2 0 9 6q8 6 11 15l35 35l185-263q2-9 7-14q9-9 23-9q13 0 23 9q0 1 1 2.5l1 1.5l89 72L898 22q8-22 30-22h1q13 0 22 9t9 22v769q0 13-9.5 22.5T928 832"></svg:path>`,
})
export class WhhAwstatsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
