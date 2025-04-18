import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiInterviewIcon],svg[openmoji-interview-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#FCEA2B"><svg:ellipse cx="20" cy="26.021" stroke="#FCEA2B" stroke-miterlimit="10" stroke-width="2" rx="13.8" ry="13.82"></svg:ellipse><svg:path d="M18.398 39.91C15.244 44.248 11 46 5 46c2.874-1.916 5.748-5.668 6.864-8.617z"></svg:path><svg:circle cx="52" cy="41.28" r="13.8" stroke="#FCEA2B" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:path d="M53.602 55.19C56.756 59.528 61 61.28 67 61.28c-2.874-1.916-5.748-5.668-6.864-8.617z"></svg:path></svg:g><svg:circle cx="13" cy="26" r="2"></svg:circle><svg:circle cx="20" cy="26" r="2"></svg:circle><svg:circle cx="27" cy="26" r="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M11.864 37.383C10.748 40.333 7.874 44.084 5 46c6 0 10.244-1.752 13.398-6.09"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M22.275 39.816C28.925 38.73 34 32.957 34 26c0-7.732-6.268-14-14-14S6 18.268 6 26c0 3.334 1.165 6.395 3.11 8.8"></svg:path><svg:circle cx="59" cy="41.28" r="2"></svg:circle><svg:circle cx="52" cy="41.28" r="2"></svg:circle><svg:circle cx="45" cy="41.28" r="2"></svg:circle><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M60.136 52.663c1.116 2.95 3.99 6.701 6.864 8.617c-6 0-10.244-1.752-13.398-6.09"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M49.725 55.096C43.075 54.01 38 48.237 38 41.28c0-7.732 6.268-14 14-14s14 6.268 14 14c0 3.334-1.165 6.395-3.11 8.8"></svg:path>`,
})
export class OpenmojiInterviewIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
