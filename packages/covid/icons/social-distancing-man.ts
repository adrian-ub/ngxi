import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidSocialDistancingManIcon],svg[covid-social-distancing-man-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 5.8A2.4 2.4 0 1 0 12 1a2.4 2.4 0 0 0 0 4.8m4.2 5.4a4.2 4.2 0 1 0-8.4 0V13h1.8l.6 6h3.6l.6-6h1.8zM1 6v4m4-2H1m22-2v4m-4-2h4"></svg:path><svg:path d="M5 15.914c-2.443.734-4 1.844-4 3.086c0 2.209 4.925 4 11 4s11-1.791 11-4c0-1.242-1.557-2.352-4-3.086"></svg:path></svg:g>`,
})
export class CovidSocialDistancingManIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
