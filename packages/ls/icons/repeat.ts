import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsRepeatIcon],svg[ls-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M453 28v95H45c-16 0-30 14-30 31v264l107-95c5-6 10-8 15-11v-67h316v95c0 28 17 36 40 16l161-148c7-6 12-14 12-24c0-9-5-18-12-24L493 12c-23-20-40-12-40 16m197 288l-106 96c-5 4-12 7-16 10v67H213v-96c0-28-17-35-40-15L11 526c-7 6-11 14-11 24c0 9 4 18 11 24l162 147c23 20 40 13 40-15v-95h407c17 0 30-14 30-31z"></svg:path>`,
})
export class LsRepeatIcon {
  readonly viewBox = input("0 0 666 733")
  readonly width = input("0.91em")
  readonly height = input("1em")
}
