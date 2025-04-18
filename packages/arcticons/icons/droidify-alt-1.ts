import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDroidifyAlt1Icon],svg[arcticons-droidify-alt-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.158 21.64h6.084a1 1 0 0 0 1-1v-1.083A12.51 12.51 0 0 0 24.229 6.91a12.24 12.24 0 0 0-12.47 12.24v1.489a1 1 0 0 0 1 1h6.083"></svg:path><svg:rect width="24.484" height="16.547" x="11.758" y="26.953" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.04 26.953V24.6a2.96 2.96 0 1 1 5.92 0v2.354m-1.555 11.599a3.61 3.61 0 1 0-2.849-.017m7.86-29.812L34.64 4.5"></svg:path><svg:circle cx="27.61" cy="15.115" r="1.211" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.584 8.724L13.36 4.5"></svg:path><svg:circle cx="20.39" cy="15.115" r="1.211" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsDroidifyAlt1Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
