import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangSuIcon],svg[circle-flags-lang-su-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangSu0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangSu0)"><svg:path fill="#496e2d" d="M0 0h512v512H0Z"></svg:path><svg:path fill="#ffda44" d="M229 172a4 4 0 0 0-3 0c-5 5-18 17-21 36c-5 25 9 52 34 67a4 4 0 0 0 5-1a4 4 0 0 0-1-6c-22-14-34-37-30-59c3-16 14-27 19-30a4 4 0 0 0 0-6a4 4 0 0 0-3-1"></svg:path><svg:path fill="#eee" d="M283 172a4 4 0 0 0-3 1a4 4 0 0 0 1 6c4 4 15 14 18 30c4 22-7 45-30 59a4 4 0 0 0-1 6a4 4 0 0 0 5 1c25-15 39-42 34-67c-3-19-16-31-21-35a4 4 0 0 0-3-1m-28 4s-12 6-12 18s19 24 19 33c0 10-9 13-9 13v22h6v-19s19-9 12-35c-5-18-16-14-16-32"></svg:path><svg:path fill="#0052b4" d="m179 300l12 44l65 32l65-32l12-44z"></svg:path><svg:path fill="#333" d="m243 267l-16 20l-5-9h-32l-10 22h153l-11-22h-32l-5 9l-16-20h-13z"></svg:path><svg:path fill="#ffda44" d="M256 141c-24 0-46 13-62 34s-25 49-25 81c0 13 1 26 4 38l-13 14a104 132 0 0 0 96 80a104 132 0 0 0 96-80l-13-14c3-12 5-25 5-38c0-32-10-60-26-81a79 79 0 0 0-62-34m0 7c22 0 42 11 57 31a135 135 0 0 1 0 154a71 71 0 0 1-57 32c-22 0-42-12-57-32c-14-19-23-47-23-77s9-57 23-77c15-20 35-31 57-31"></svg:path><svg:rect width="8" height="27" x="252" y="260" fill="#d80027" rx="4" ry="4"></svg:rect></svg:g>`,
})
export class CircleFlagsLangSuIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
