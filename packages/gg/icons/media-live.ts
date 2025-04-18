import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggMediaLiveIcon],svg[gg-media-live-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-2 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path d="M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-2a5 5 0 1 0 0-10a5 5 0 0 0 0 10"></svg:path><svg:path d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12s4.925 11 11 11m0-2a9 9 0 1 0 0-18a9 9 0 0 0 0 18"></svg:path></svg:g>`,
})
export class GgMediaLiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
