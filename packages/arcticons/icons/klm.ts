import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKlmIcon],svg[arcticons-klm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.44 28.576v10.982h6.832m4.565-.012v-10.97l6.831 10.982L42.5 28.593v10.965m-37-10.963v10.981m0-3.825l7.344-7.119m0 10.944l-5.626-5.49"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="13.944" cy="17.34" r="3.352"></svg:circle><svg:circle cx="20.648" cy="17.34" r="3.352"></svg:circle><svg:circle cx="27.352" cy="17.34" r="3.352"></svg:circle><svg:circle cx="34.056" cy="17.34" r="3.352"></svg:circle><svg:path d="M13.944 25.184h20.112M24 12.446V8.424m-2.011 2.011h4.022"></svg:path></svg:g>`,
})
export class ArcticonsKlmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
