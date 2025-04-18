import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangBsIcon],svg[circle-flags-lang-bs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangBs0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangBs0)"><svg:path fill="#ffda44" d="M0 0h445.3l33.9 255l-33.9 257l-323.7-134.3L0 66.8z"></svg:path><svg:path fill="#0052b4" d="M0 66.8V512h445.4z"></svg:path><svg:path fill="#0052b4" d="M445.3 0H512v512h-66.7z"></svg:path><svg:path fill="#eee" d="m354.6 456l-8.3 25.6h-26.8l21.7 15.8l-8.3 25.5l21.7-15.8l21.7 15.8l-8.3-25.5l21.7-15.8h-26.8zm-55-55.4l-8.3 25.5h-26.8l21.7 15.8l-8.3 25.5l21.7-15.8l21.7 15.8l-8.3-25.5l21.7-15.8h-26.8zM244.4 345l-8.3 25.5h-26.8l21.7 15.8l-8.3 25.5l21.7-15.8l21.7 15.8l-8.3-25.5l21.7-15.8h-26.8zm-55.1-55.7l-8.3 25.5h-26.8l21.7 15.8l-8.3 25.5l21.7-15.8L211 356l-8.3-25.5l21.7-15.8h-26.8zm-55.4-55.7l-8.3 25.5H98.8l21.7 15.8l-8.3 25.5l21.7-15.8l21.7 15.8l-8.3-25.5L169 259h-26.8zM78.7 178l-8.3 25.5H43.6l21.7 15.8l-8.3 25.5L78.7 229l21.7 15.8l-8.3-25.5l21.7-15.8H87zm-55.2-55.7l-8.3 25.5h-26.8l21.7 15.8L1.8 189l21.7-15.8L45.2 189l-8.3-25.5l21.7-15.8H31.8z"></svg:path></svg:g>`,
})
export class CircleFlagsLangBsIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
