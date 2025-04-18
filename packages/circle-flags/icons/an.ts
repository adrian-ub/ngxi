import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsAnIcon],svg[circle-flags-an-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsAn0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsAn0)"><svg:path fill="#eee" d="M0 0h171l85 32l85-32h171v171l-32 85l32 85v171H341l-85-32l-85 32H0V341l32-85l-32-85Z"></svg:path><svg:path fill="#d80027" d="M171 0h170v512H171z"></svg:path><svg:path fill="#0052b4" d="M512 171v170H0V171z"></svg:path><svg:path fill="#eee" d="m236 247l52-37h-64l52 37l-20-61zm-45 79l52-37h-64l52 37l-20-61zm90 0l52-37h-64l52 37l-20-61zm74-47l52-37h-64l52 37l-20-61zm-238 0l52-37h-64l52 37l-20-61z"></svg:path></svg:g>`,
})
export class CircleFlagsAnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
