import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangOmIcon],svg[circle-flags-lang-om-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangOm0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangOm0)"><svg:path fill="#eee" d="m0 160l256-32l256 32v192l-256 32L0 352Z"></svg:path><svg:path fill="#d80027" d="M0 0h512v160H0Z"></svg:path><svg:path fill="#333" d="M0 352h512v160H0Z"></svg:path><svg:path fill="#6da544" d="M233 294c0 25-26 42-26 42h98s-26-17-26-42z"></svg:path><svg:path fill="#496e2d" d="M256 176c-9 0-17 4-23 10a32 32 0 0 0-48 24a32 32 0 0 0 2 59a32 32 0 0 0 46 25c6 6 14 10 23 10s17-4 23-10c4 3 9 4 14 4c17 0 31-13 32-29a32 32 0 0 0 2-59a32 32 0 0 0-48-24c-6-6-14-10-23-10"></svg:path></svg:g>`,
})
export class CircleFlagsLangOmIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
