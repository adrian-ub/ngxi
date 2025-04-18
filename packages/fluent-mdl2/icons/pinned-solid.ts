import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PinnedSolidIcon],svg[fluent-mdl2-pinned-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1990 748q-33 33-64 60t-66 47t-73 29t-89 11q-34 0-65-6l-379 379q13 38 19 78t6 80q0 65-13 118t-37 100t-60 89t-79 87l-386-386l-568 569l-136 45l45-136l569-568l-386-386q44-44 86-79t89-59t100-38t119-13q40 0 80 6t78 19l379-379q-6-31-6-65q0-49 10-88t30-74t46-65t61-65z"></svg:path>`,
})
export class FluentMdl2PinnedSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
