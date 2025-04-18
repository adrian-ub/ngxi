import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsNcIcon],svg[circle-flags-nc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsNc0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsNc0)"><svg:path fill="#496e2d" d="M0 352h512v160H0z"></svg:path><svg:path fill="#d80027" d="M0 160h512v192H0z"></svg:path><svg:path fill="#0052b4" d="M0 0h512v160H0z"></svg:path><svg:path fill="#ffda44" d="M398 256a168 168 0 1 1-336 0a168 168 0 0 1 336 0"></svg:path><svg:path fill="#333" d="M230 80a176 176 0 1 0 0 352a176 176 0 0 0 0-352m-8 16v34c-8 4-14 8-15 16l-1 16l6-3l10-4v8a24 24 0 0 0-16 23a24 24 0 0 0 16 22v8h-20v16h20v8a24 24 0 0 0-16 22a24 24 0 0 0 16 23v7h-20v17h20v7a24 24 0 0 0-16 23a24 24 0 0 0 16 22v8c-10 0-18 3-23 7c-7 5-22 20-30 28a160 160 0 0 1 53-308m16 0a160 160 0 0 1 51 309l-30-29c-5-4-12-6-21-7v-8a24 24 0 0 0 16-22a24 24 0 0 0-16-23v-7h21v-16h-21v-8a24 24 0 0 0 16-23a24 24 0 0 0-16-22v-8h21v-16h-21v-7a24 24 0 0 0 16-23a24 24 0 0 0-16-23v-20c6-5 11-13 17-23c4-8 2-11 2-11l-2 3l-17 11z"></svg:path></svg:g>`,
})
export class CircleFlagsNcIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
