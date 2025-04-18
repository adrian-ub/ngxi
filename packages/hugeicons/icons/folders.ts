import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsFoldersIcon],svg[hugeicons-folders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.5 9.556h8.775c1.896 0 2.844 0 3.525.449c.295.194.548.444.745.736c.455.672.455 1.609.455 3.481c0 3.121 0 4.682-.758 5.803c-.329.485-.75.902-1.242 1.226c-1.135.749-2.715.749-5.875.749H12c-4.243 0-6.364 0-7.682-1.302S3 17.301 3 13.111v-2.716c0-1.615 0-2.422.342-3.028a2.7 2.7 0 0 1 1.042-1.029C4.998 6 5.815 6 7.45 6c1.047 0 1.57 0 2.03.17c1.046.387 1.478 1.327 1.95 2.26L12 9.555M3 2h5.5c.97 0 1.918-.028 2.739.555c1.051.748 1.471 2.142 2.522 2.89c.82.583 1.769.555 2.739.555H21" color="currentColor"></svg:path>`,
})
export class HugeiconsFoldersIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
