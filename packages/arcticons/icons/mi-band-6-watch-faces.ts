import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMiBand6WatchFacesIcon],svg[arcticons-mi-band-6-watch-faces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-miterlimit="10" d="M24 8.455a5.43 5.43 0 0 1 5.435 5.44v20.112c0 3.012-2.426 5.441-5.435 5.441s-5.435-2.429-5.435-5.44V13.895A5.43 5.43 0 0 1 24 8.455Z"></svg:path><svg:path d="M31.86 33.521c0 3.206.098 6.024-1.358 8.356c-1.358 2.332-4.95 2.623-5.823 2.623h-1.358c-.874 0-4.465-.292-5.823-2.623s-1.359-5.15-1.359-8.356V14.48c0-3.206-.097-6.024 1.359-8.356C18.856 3.791 22.448 3.5 23.32 3.5h1.358c.874 0 4.465.292 5.823 2.623s1.359 5.15 1.359 8.356z"></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.896 21.896h4.308v4.308h-4.308zm4.208-4.808h-4.208L24 12.88zm0 15.928c-.1 2.805-4.208 2.805-4.308 0c.1-2.805 4.308-2.805 4.308 0"></svg:path>`,
})
export class ArcticonsMiBand6WatchFacesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
