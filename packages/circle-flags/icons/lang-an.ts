import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangAnIcon],svg[circle-flags-lang-an-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangAn0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangAn0)"><svg:path fill="#ffda44" d="M0 0v57l32 29l-32 28v57l32 29l-32 28v57l32 28l-32 28v57l32 29l-32 28v57h512v-57l-32-28l32-29v-57l-32-28l32-28v-57l-32-28l32-29v-57l-32-28l32-29V0z"></svg:path><svg:path fill="#d80027" d="M0 57h512v57H0Zm0 114h512v57H0Zm0 114h512v56H0Zm0 113h512v57H0Z"></svg:path><svg:path fill="#ff9811" d="M96 128v160l96 96c53 0 96-43 96-96l-48-48l48-48v-64h-28v32h-27v-32h-27v32h-28v-32h-27v32h-28v-32z"></svg:path><svg:path fill="#0052b4" d="M192 192h96v96h-96z"></svg:path><svg:path fill="#eee" d="M192 288v96a96 96 0 0 1-96-96Z"></svg:path></svg:g>`,
})
export class CircleFlagsLangAnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
