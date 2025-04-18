import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidSocialDistancingDoNotClose2Icon],svg[covid-social-distancing-do-not-close-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13.083 7.936a5 5 0 0 1 3.551 2.439M6.225 6.525a2.825 2.825 0 1 0 0-5.65a2.825 2.825 0 0 0 0 5.65m4.828 8.1a1.5 1.5 0 1 1 0-3h2.5m-7.25 10.25v-5.194m2.997.436v4.508a1.5 1.5 0 0 1-3 0M10.809.996a2.825 2.825 0 1 1-.05 5.392"></svg:path><svg:path d="M.8 12.875a5 5 0 0 1 5-5h1a5 5 0 0 1 4.843 3.75"></svg:path><svg:path d="M6.3 21.625a1.5 1.5 0 0 1-3 0v-6.812h-1a1.5 1.5 0 0 1-1.5-1.5v-.438m17.396 10.107a5 5 0 1 0 0-10a5 5 0 0 0 0 10m3.535-8.534l-7.07 7.07"></svg:path></svg:g>`,
})
export class CovidSocialDistancingDoNotClose2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
