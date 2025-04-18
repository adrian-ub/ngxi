import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBhagavadGitaIcon],svg[arcticons-bhagavad-gita-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="24" cy="24" r="17.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M25.664 35.262V16.039a3.3 3.3 0 0 1 3.3-3.3h0a3.3 3.3 0 0 1 3.301 3.3v19.223m-8.27-18.168h9.954"></svg:path><svg:circle cx="18.902" cy="17.947" r="3.325" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m16.55 20.298l9.037 9.037m-13.536-.971l6.283-6.282m-2.47 10.264l6.367-6.367"></svg:path>`,
})
export class ArcticonsBhagavadGitaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
