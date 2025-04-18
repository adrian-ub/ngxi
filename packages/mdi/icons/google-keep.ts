import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleKeepIcon],svg[mdi-google-keep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a2 2 0 0 1 2 2v13.33L17.33 22H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2m13 15v3.25L20.25 17zm-7 2h4v-1h1v-5a5.002 5.002 0 0 0-3-9a5.002 5.002 0 0 0-3 9v5h1zm4-2h-4v-2h4zM12 5c2.21 0 4 1.79 4 4c0 1.5-.8 2.77-2 3.46V14h-4v-1.54C8.8 11.77 8 10.5 8 9c0-2.21 1.79-4 4-4"></svg:path>`,
})
export class MdiGoogleKeepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
