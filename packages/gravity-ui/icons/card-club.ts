import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCardClubIcon],svg[gravity-ui-card-club-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.5 4v8a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12V4A1.5 1.5 0 0 1 5 2.5h6A1.5 1.5 0 0 1 12.5 4M11 1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3zM9.5 6q-.001.265-.086.502L9.5 6.5a1.5 1.5 0 1 1-1.228 2.361c.08.667.382 1.293.862 1.773L9.5 11v.5h-3V11l.366-.366c.48-.48.782-1.106.862-1.773a1.5 1.5 0 1 1-1.142-2.359A1.5 1.5 0 1 1 9.5 6" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCardClubIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
