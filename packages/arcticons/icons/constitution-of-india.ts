import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsConstitutionOfIndiaIcon],svg[arcticons-constitution-of-india-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13 19.875v8.801"></svg:path><svg:circle cx="28.328" cy="20.094" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.328 22.735v5.941M35 26.475c0 1.21-.958 2.2-2.13 2.2s-2.13-.99-2.13-2.2v-1.43c0-1.21.959-2.2 2.13-2.2s2.13.99 2.13 2.2m0 3.631v-5.941m-15.546 5.941v-3.63c0-1.211-.959-2.201-2.13-2.201s-2.13.99-2.13 2.2m0 3.631v-5.941m10.723 2.2c0-1.21-.959-2.2-2.13-2.2s-2.13.99-2.13 2.2v1.43c0 1.21.959 2.2 2.13 2.2s2.13-.99 2.13-2.2m0 2.311v-8.802"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsConstitutionOfIndiaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
