import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGooglePlusBoxIcon],svg[mdi-google-plus-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m14.5 9H18v-1.5h-1V12h-1.5v1H17v1.5h1V13h1.5v-1m-9.85-.64v1.54h2.57c-.13.64-.77 1.93-2.57 1.93c-1.54 0-2.76-1.29-2.76-2.83s1.22-2.83 2.76-2.83c.9 0 1.48.39 1.8.71l1.22-1.16c-.77-.77-1.8-1.22-3.02-1.22c-2.51 0-4.5 2-4.5 4.5s1.99 4.5 4.5 4.5c2.57 0 4.31-1.8 4.31-4.37c0-.32 0-.52-.07-.77H9.65z" fill="currentColor"></svg:path>`,
})
export class MdiGooglePlusBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
