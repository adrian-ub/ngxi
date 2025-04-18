import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNetflixSolidIcon],svg[streamline-netflix-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.625 13.212V2.793l3.4 7.488v1.967a.5.5 0 0 1-.314.464l-2.4.964a.5.5 0 0 1-.686-.464m10.75-12.7v10.825l-3.4-7.055V.512a.5.5 0 0 1 .5-.5h2.4a.5.5 0 0 1 .5.5M2.125.265h3.25l6.5 13.489l-4.063-.964L2.125.266Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNetflixSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
