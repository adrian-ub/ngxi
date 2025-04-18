import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSymphonyAlt1Icon],svg[arcticons-symphony-alt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="24" cy="24" r="21.5"></svg:circle><svg:circle cx="23.795" cy="23.729" r="5.09"></svg:circle><svg:path d="M11.135 21.008a13.09 13.09 0 0 1 10.086-9.767m-14.069 8.67A17.12 17.12 0 0 1 19.448 7.368m17.38 19.918a13.09 13.09 0 0 1-10.087 9.767m14.069-8.67a17.12 17.12 0 0 1-12.296 12.544"></svg:path><svg:ellipse cx="8.931" cy="42.848" rx="3.338" ry="2.115"></svg:ellipse><svg:path d="M12.261 42.765V28.653m3.999 3.281a3.553 3.553 0 0 1-3.952-3.205M41.245 11.17H32.52l-2.512 2.512"></svg:path></svg:g>`,
})
export class ArcticonsSymphonyAlt1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
