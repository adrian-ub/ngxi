import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsStackOverflowFillIcon],svg[akar-icons-stack-overflow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.372 20.222v-5.358h1.79V22H4v-7.136h1.79v5.358z"></svg:path><svg:path fill="currentColor" d="m7.768 14.356l8.79 1.824l.372-1.755L8.14 12.6zm1.162-4.157l8.14 3.764l.744-1.617l-8.14-3.787zm2.256-3.973l6.907 5.705l1.14-1.363l-6.907-5.704zM15.651 2L14.21 3.062l5.35 7.16L21 9.159zm-8.07 16.42h8.977v-1.778H7.581z"></svg:path>`,
})
export class AkarIconsStackOverflowFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
