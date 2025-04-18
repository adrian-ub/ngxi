import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilClapperboardIcon],svg[pepicons-pencil-clapperboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M.768 4.972a.5.5 0 0 1 .382-.595l14.653-3.208a.5.5 0 0 1 .595.381l.642 2.93a.5.5 0 0 1-.382.596L2.005 8.284a.5.5 0 0 1-.595-.381zm1.084.275L2.28 7.2l13.676-2.995l-.428-1.954z"></svg:path><svg:path d="M9.854 6.338L7.26 3.835l.694-.72l2.596 2.503zm-3.907.855L3.352 4.691l.694-.72L6.64 6.474zm7.815-1.711L11.166 2.98l.695-.72l2.595 2.503zm-4.773 5.795l2-3l-.832-.554l-2 3zm4 0l2-3l-.832-.554l-2 3zm-8 0l2-3l-.832-.554l-2 3z"></svg:path><svg:path d="M1.573 8a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5zm1 .5v8h14v-8z"></svg:path><svg:path d="M17.573 11.5h-16v-1h16z"></svg:path></svg:g>`,
})
export class PepiconsPencilClapperboardIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
