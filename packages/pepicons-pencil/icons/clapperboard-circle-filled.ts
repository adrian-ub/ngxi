import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilClapperboardCircleFilledIcon],svg[pepicons-pencil-clapperboard-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilClapperboardCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M3.768 7.972a.5.5 0 0 1 .382-.595l14.653-3.208a.5.5 0 0 1 .595.381l.642 2.93a.5.5 0 0 1-.382.596L5.005 11.284a.5.5 0 0 1-.595-.381zm1.084.275L5.28 10.2l13.676-2.995l-.428-1.954z"></svg:path><svg:path d="M12.854 9.338L10.26 6.835l.694-.72l2.596 2.503zm-3.907.855L6.352 7.691l.694-.72L9.64 9.474zm7.815-1.711L14.166 5.98l.695-.72l2.595 2.503zm-4.773 5.795l2-3l-.832-.554l-2 3zm4 0l2-3l-.832-.554l-2 3zm-8 0l2-3l-.832-.554l-2 3z"></svg:path><svg:path d="M4.573 11a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5zm1 .5v8h14v-8z"></svg:path><svg:path d="M20.573 14.5h-16v-1h16z"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilClapperboardCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilClapperboardCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
