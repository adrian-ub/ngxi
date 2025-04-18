import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangYiIcon],svg[circle-flags-lang-yi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangYi0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangYi0)"><svg:path fill="#eee" d="M0 0h512v56l-25 32l25 34v268l-26 36l26 30v56H0v-56l25-34l-25-32V122l27-33L0 56z"></svg:path><svg:path fill="#333" d="M0 390v66h512v-66z"></svg:path><svg:circle cx="256" cy="186" r="104" fill="#333"></svg:circle><svg:circle cx="256" cy="186" r="84" fill="#eee"></svg:circle><svg:circle cx="256" cy="186" r="64" fill="#333"></svg:circle><svg:circle cx="256" cy="186" r="44" fill="#eee"></svg:circle><svg:path fill="#333" d="m246 319l-49 11v14h118v-14l-49-11z"></svg:path><svg:path fill="#eee" d="M148 78h216v108H148z"></svg:path><svg:path fill="#333" d="M246 180h20v150h-20zm87-8h34l-7 15h-20zm-40 0h34l-7 15h-20zm-108 0h34l-7 15h-20zm-40 0h34l-7 15h-20z"></svg:path><svg:path fill="#333" d="M239 172h34l-7 15h-20zM0 56v66h512V56z"></svg:path></svg:g>`,
})
export class CircleFlagsLangYiIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
