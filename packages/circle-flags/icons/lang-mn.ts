import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangMnIcon],svg[circle-flags-lang-mn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangMn0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangMn0)"><svg:path fill="#a2001d" d="M0 0h167l84.9 45L345 0h167v512H345l-87.7-48.1L167 512H0z"></svg:path><svg:path fill="#0052b4" d="M167 0h178v512H167z"></svg:path><svg:g fill="#ffda44"><svg:path d="M122.4 256h22.3v89h-22.3zm-89 0h22.3v89H33.4z"></svg:path><svg:circle cx="89" cy="289.4" r="22.3"></svg:circle><svg:circle cx="89" cy="211.5" r="11.1"></svg:circle><svg:path d="M66.8 322.8h44.5V345H66.8zm0-89h44.5V256H66.8zM89 133.5l8 24.2h25.4l-20.6 15l7.9 24.3L89 182l-20.6 15l7.9-24.3l-20.6-15h25.5z"></svg:path></svg:g></svg:g>`,
})
export class CircleFlagsLangMnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
