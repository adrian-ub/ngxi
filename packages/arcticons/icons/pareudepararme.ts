import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPareudepararmeIcon],svg[arcticons-pareudepararme-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m36.973 37.872l-18.5 4.299L5.5 28.299l5.527-18.171l18.5-4.299L42.5 19.701ZM14.69 18.605l18.43 11.058m-18.43 0l18.43-11.058"></svg:path>`,
})
export class ArcticonsPareudepararmeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
