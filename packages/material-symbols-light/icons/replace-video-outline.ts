import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightReplaceVideoOutlineIcon],svg[material-symbols-light-replace-video-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20h6.77q.268 0 .442-.173q.172-.173.172-.442v-6.77q0-.269-.172-.442q-.173-.173-.443-.173H8q-.27 0-.442.173q-.173.173-.173.443v6.769q0 .269.173.442T8 20M4.327 8.77q.739-2.572 2.864-4.171T12 3q2.223 0 4.099 1.144T19 7.234V4h1v4.77h-4.77v-1h2.862q-.84-1.726-2.49-2.748T12 4Q9.725 4 7.907 5.306t-2.52 3.463zM7.385 20v-8zM8 21q-.671 0-1.143-.472q-.473-.472-.473-1.144v-6.768q0-.672.473-1.144Q7.329 11 8 11h6.77q.67 0 1.142.472t.472 1.144V15.5L19 12.885v6.23L16.384 16.5v2.885q0 .67-.472 1.143Q15.44 21 14.77 21z"></svg:path>`,
})
export class MaterialSymbolsLightReplaceVideoOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
