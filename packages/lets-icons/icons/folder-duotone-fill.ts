import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFolderDuotoneFillIcon],svg[lets-icons-folder-duotone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" d="M3 8c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 5 5.068 5 6 5h2.343c.818 0 1.226 0 1.594.152s.657.442 1.235 1.02L13 8v3H3z"></svg:path><svg:path fill="currentColor" d="M3 11.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.52 8 5.08 8 6.2 8h11.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 9.52 21 10.08 21 11.2v4.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C19.48 19 18.92 19 17.8 19H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 17.48 3 16.92 3 15.8z"></svg:path>`,
})
export class LetsIconsFolderDuotoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
