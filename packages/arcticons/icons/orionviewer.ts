import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOrionviewerIcon],svg[arcticons-orionviewer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.093 38.464a9.99 9.99 0 1 0-5.052-19.279"></svg:path><svg:circle cx="26.715" cy="7.864" r=".75" fill="currentColor"></svg:circle><svg:circle cx="22.676" cy="25.949" r=".75" fill="currentColor"></svg:circle><svg:circle cx="35.576" cy="23.25" r=".75" fill="currentColor"></svg:circle><svg:circle cx="40.742" cy="28.766" r=".75" fill="currentColor"></svg:circle><svg:circle cx="19.764" cy="41.089" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.24 31.14a5.307 5.307 0 0 0 5.307 5.307m0 0a5.307 5.307 0 0 0-5.307 5.307"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.24 41.755a5.307 5.307 0 0 0-5.307-5.308"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.932 36.447a5.307 5.307 0 0 0 5.308-5.307m8.919-18.328a3.333 3.333 0 0 0 3.333 3.333m0 0a3.333 3.333 0 0 0-3.333 3.333m0 0a3.333 3.333 0 0 0-3.333-3.333m0 0a3.333 3.333 0 0 0 3.333-3.333M15.972 7.487a4.54 4.54 0 0 0 4.542 4.542"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.514 12.03a4.54 4.54 0 0 0-4.542 4.542"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.972 16.572a4.54 4.54 0 0 0-4.542-4.543"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.43 12.03a4.54 4.54 0 0 0 4.542-4.543"></svg:path>`,
})
export class ArcticonsOrionviewerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
