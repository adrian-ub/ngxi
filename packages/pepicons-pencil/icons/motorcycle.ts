import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMotorcycleIcon],svg[pepicons-pencil-motorcycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.75 12a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-3.5 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path><svg:path fill-rule="evenodd" d="M10 7a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-5a2 2 0 1 1 0 4a2 2 0 0 1 0-4m.5 12h-1A1.5 1.5 0 0 0 8 15.5v2A1.5 1.5 0 0 0 9.5 19h1a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5M9 15.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path><svg:path d="M15.5 3.75a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 0 1.5zm-13 0a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 0 1.5z"></svg:path><svg:path d="m4.106 3.364l.302-.97l3.698.742l-.302.97zm7.788-.228l.302.97l3.698-.742l-.302-.97z"></svg:path><svg:path fill-rule="evenodd" d="M14.5 10.5a4.5 4.5 0 1 0-9 0V13a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2zm-8 0a3.5 3.5 0 1 1 7 0V13a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPencilMotorcycleIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
