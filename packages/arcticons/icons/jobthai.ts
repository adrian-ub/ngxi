import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsJobthaiIcon],svg[arcticons-jobthai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.94 26.643c0 .83-.67 1.502-1.5 1.503h-.001a1.5 1.5 0 0 1-1.499-1.503c0-.829.671-1.502 1.5-1.503h0c.83.001 1.5.674 1.5 1.503m-1.542 3.067v7.432m-3.287-4.035c0-2.228-1.803-4.036-4.028-4.036s-4.028 1.806-4.028 4.036s1.803 4.035 4.028 4.035s4.028-1.807 4.028-4.035v4.035m-18.719 0v-4.69zm7.463 0v-4.69c0-1.688-1.665-3.048-3.732-3.048s-3.73 1.36-3.73 3.048v-6.354M9.5 29.15v-3.052m2.683 10.943h-.401A2.28 2.28 0 0 1 9.5 34.766V29.15h2.682m-1.949-9.476c.346 1.185 1.466 2.052 2.794 2.052c1.605 0 2.905-1.265 2.905-2.825v-8.044m13.778 6.919c0 2.229 1.803 4.035 4.028 4.035s4.028-1.806 4.028-4.036s-1.803-4.036-4.028-4.036s-4.028 1.807-4.028 4.036v-6.918m-2.67 6.919a4.03 4.03 0 0 1-4.028 4.035c-2.224 0-4.028-1.807-4.028-4.036s1.804-4.036 4.028-4.036a4.03 4.03 0 0 1 4.027 4.036"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsJobthaiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
