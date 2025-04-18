import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopMotorcycleCircleIcon],svg[pepicons-pop-motorcycle-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15.75 15.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-3.5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M13 11a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m0-5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" clip-rule="evenodd"></svg:path><svg:path d="M13 17a2 2 0 0 1 2 2v1.5a2 2 0 1 1-4 0V19a2 2 0 0 1 2-2"></svg:path><svg:path fill-rule="evenodd" d="M18 14a5 5 0 0 0-10 0v2.5a2.5 2.5 0 0 0 2.5 2.5h5a2.5 2.5 0 0 0 2.5-2.5zm-8 0a3 3 0 0 1 6 0v2.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path><svg:path d="M18.5 7.5a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2zm-13 0a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z"></svg:path><svg:path d="m6.41 7.046l.476-1.455l4.524.863l-.477 1.456zm8.18-.592l.477 1.456l4.523-.864l-.476-1.455z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopMotorcycleCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
