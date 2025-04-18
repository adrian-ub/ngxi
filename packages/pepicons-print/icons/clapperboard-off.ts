import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintClapperboardOffIcon],svg[pepicons-print-clapperboard-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g opacity=".2"><svg:path d="m3.156 6.137l13.817-3.025l.605 2.764L3.76 8.9z"></svg:path><svg:path fill-rule="evenodd" d="M2.18 6.351a1 1 0 0 1 .762-1.19L16.76 2.135a1 1 0 0 1 1.19.763l.605 2.764a1 1 0 0 1-.763 1.19L3.975 9.877a1 1 0 0 1-1.19-.762zm2.167.55l.177.809l11.863-2.597l-.177-.81z" clip-rule="evenodd"></svg:path><svg:path d="M3.926 9.093h14.143v8.486H3.926z"></svg:path><svg:path fill-rule="evenodd" d="M2.926 9.093a1 1 0 0 1 1-1h14.143a1 1 0 0 1 1 1v8.486a1 1 0 0 1-1 1H3.926a1 1 0 0 1-1-1zm2 1v6.486h12.143v-6.486z" clip-rule="evenodd"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M.768 4.972a.5.5 0 0 1 .382-.595l14.653-3.208a.5.5 0 0 1 .595.381l.642 2.93a.5.5 0 0 1-.382.596L2.005 8.284a.5.5 0 0 1-.595-.381zm1.084.275L2.28 7.2l13.676-2.995l-.428-1.954z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M9.854 6.338L7.26 3.835l.694-.72l2.596 2.503zm-3.907.855L3.352 4.691l.694-.72L6.64 6.474zm7.815-1.711L11.166 2.98l.695-.72l2.595 2.503zm-4.773 5.795l2-3l-.832-.554l-2 3zm4 0l2-3l-.832-.554l-2 3zm-8 0l2-3l-.832-.554l-2 3z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M1.573 8a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5zm1 .5v8h14v-8z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17.573 11.5h-16v-1h16z" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPrintClapperboardOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
