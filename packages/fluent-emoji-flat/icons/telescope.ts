import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatTelescopeIcon],svg[fluent-emoji-flat-telescope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#7167A4" d="M16.25 29.25a.75.75 0 1 1-1.5 0V18.285l-8.396 11.41a.75.75 0 0 1-1.208-.89l8.696-11.817A1.004 1.004 0 0 1 13 16c0-.55.45-1 .998-1h.752v-3.25a.75.75 0 0 1 1.5 0V15h.752c.548 0 .998.45.998 1c0 .421-.264.784-.634.93l8.738 11.875a.75.75 0 1 1-1.208.89l-8.646-11.75z"></svg:path><svg:path fill="#AEDDFF" d="M3.227 4.278c-.618 1.651.08 3.508 1.583 4.33l.94.351L8 8l1-4l-.8-1.598l-.937-.35c-1.673-.368-3.418.575-4.036 2.226"></svg:path><svg:path fill="#D3D3D3" d="m22.834 8.947l4.721 1.767L29 13l-1 2l-2.231.384l-4.687-1.754L20 10.5z"></svg:path><svg:path fill="#BEBEBE" d="m8.596 3.942l3.341-.141l11.248 4.21l-2.454 6.555l-11.25-4.21l-1.995-2.632z"></svg:path><svg:path fill="#5235A6" d="M11.946 3.804L8.2 2.402L5.746 8.958l3.746 1.402zM29.39 11.4l-1.873-.7l-1.753 4.682l1.874.7a1 1 0 0 0 1.287-.585l1.051-2.81a1 1 0 0 0-.586-1.287"></svg:path></svg:g>`,
})
export class FluentEmojiFlatTelescopeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
