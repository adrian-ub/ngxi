import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[covidSocialDistancingDoNotClose4Icon],svg[covid-social-distancing-do-not-close-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m13.524 22.009l.226 1.241h3.5l1-5.5H20v-3a4.5 4.5 0 0 0-2.484-4.024M8.5 9.25a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5m9.668-3.418a2.735 2.735 0 0 0-4.345-1.5M.75 23.25L23.25.75M12.035 11.965A4.5 4.5 0 0 0 4 14.75v3h2.25m.229 4.013l.271 1.487h3.5l1-5.5H13v-2.507"></svg:path>`,
})
export class CovidSocialDistancingDoNotClose4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
