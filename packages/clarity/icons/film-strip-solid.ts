import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityFilmStripSolidIcon],svg[clarity-film-strip-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 4H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M20 7h2v3h-2Zm-6 0h2v3h-2Zm-4 22H8v-3h2Zm0-19H8V7h2Zm6 19h-2v-3h2Zm6 0h-2v-3h2Zm3.16-10.16l-9.77 4.36a1 1 0 0 1-1.39-.92v-8.71a1 1 0 0 1 1.41-.91L25.16 17a1 1 0 0 1 0 1.84M28 29h-2v-3h2Zm0-19h-2V7h2Z" class="clr-i-solid clr-i-solid-path-1"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityFilmStripSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
