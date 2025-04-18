import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangMiIcon],svg[circle-flags-lang-mi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangMi0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangMi0)"><svg:path fill="#eee" d="m0 68.6l247.8-24.7L512 299v93.9l-399.2 36.2L0 162.5z"></svg:path><svg:path fill="#333" d="M0 0v68.6h178a115.2 115.2 0 1 1 0 230.4h334V0z"></svg:path><svg:path fill="#d80027" d="M0 162.5V512h512V392.9H178a93.9 93.9 0 1 1 0-187.8a47 47 0 0 1 0 93.9a68.3 68.3 0 0 0 0-136.5z"></svg:path></svg:g>`,
})
export class CircleFlagsLangMiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
