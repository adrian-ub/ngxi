import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiHammerIcon],svg[gravity-ui-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiHammer0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M11.245 8.884a1.3 1.3 0 0 0-.084-.347A1.25 1.25 0 0 0 10 7.75l-4.424 6.53A2.777 2.777 0 0 1 .5 12.724v-.075c0-.736.285-1.445.796-1.976L6.75 5v-.158A2.17 2.17 0 0 0 5.55 2.9l-.117-.058A1.236 1.236 0 0 1 5.986.5H7.68a5 5 0 0 1 3.535 1.464L12.75 3.5a2 2 0 0 0 2 2l1 1l-1.06 1.06l-1.38 1.38L12.25 10l-1-1q0-.06-.005-.116m-1.091-5.859l1.164 1.164a3.5 3.5 0 0 0 2.081 2.54l-.973.974A2.75 2.75 0 0 0 10 6.25h-.796l-.446.659l-.65.96l-1.098-.975l.821-.854l.419-.436v-.762A3.67 3.67 0 0 0 6.903 2h.776a3.5 3.5 0 0 1 2.475 1.025M5.969 7.976l1.29 1.146l-2.925 4.317A1.277 1.277 0 0 1 2 12.723v-.075c0-.349.135-.684.377-.936z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiHammer0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiHammerIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
