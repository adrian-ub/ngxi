import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopMotorcycleIcon],svg[pepicons-pop-motorcycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.75 12.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-3.5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M10 8a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7m0-5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" clip-rule="evenodd"></svg:path><svg:path d="M10 14a2 2 0 0 1 2 2v1.5a2 2 0 1 1-4 0V16a2 2 0 0 1 2-2"></svg:path><svg:path fill-rule="evenodd" d="M15 11a5 5 0 0 0-10 0v2.5A2.5 2.5 0 0 0 7.5 16h5a2.5 2.5 0 0 0 2.5-2.5zm-8 0a3 3 0 0 1 6 0v2.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path><svg:path d="M15.5 4.5a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2zm-13 0a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z"></svg:path><svg:path d="m3.41 4.046l.476-1.455l4.524.863l-.477 1.456zm8.18-.592l.477 1.456l4.523-.864l-.476-1.455z"></svg:path></svg:g>`,
})
export class PepiconsPopMotorcycleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
