import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsAlignleftIcon],svg[ls-alignleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 77v42c0 14 13 28 29 28h331c15 0 28-13 28-28V77c0-14-13-27-28-27H29C13 50 0 63 0 77m0 163v41c0 16 13 28 29 28h554c15 0 27-12 27-28v-41c0-15-12-27-27-27H29c-16 0-29 12-29 27m0 162v42c0 15 13 28 29 28h388c14 0 26-13 26-28v-42c0-15-12-28-26-28H29c-16 0-29 13-29 28m0 172v41c0 16 13 29 29 29h609c15 0 28-13 28-29v-41c0-14-13-28-28-28H29c-16 0-29 13-29 28"></svg:path>`,
})
export class LsAlignleftIcon {
  readonly viewBox = input("0 0 666 644")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
