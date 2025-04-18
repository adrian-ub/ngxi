import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsLangRnIcon],svg[circle-flags-lang-rn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsLangRn0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsLangRn0)"><svg:path fill="#eee" d="M0 0h47.2l207.5 30L464.8 0H512v47.2L477.4 256L512 464.8V512h-47.2l-209.1-35.8L47.2 512H0v-47.2l32.8-202.7L0 47.2z"></svg:path><svg:path fill="#d80027" d="M47.2 0L256 208.8L464.8 0zM256 303.2L47.2 512h417.6z"></svg:path><svg:path fill="#6da544" d="M0 47.2v417.6L208.8 256zm512 0L303.2 256L512 464.8z"></svg:path><svg:circle cx="256" cy="256" r="111.3" fill="#eee"></svg:circle><svg:path fill="#d80027" d="m256 178l9.6 16.8H285l-9.6 16.7l9.6 16.7h-19.3l-9.6 16.7l-9.6-16.7H227l9.6-16.7l-9.6-16.7h19.3zm-49 78l9.6 16.7H236l-9.6 16.7l9.6 16.7h-19.3l-9.6 16.7l-9.6-16.7H178l9.6-16.7l-9.6-16.7h19.3zm98 0l9.6 16.7H334l-9.6 16.7l9.6 16.7h-19.3l-9.6 16.7l-9.6-16.7H276l9.6-16.7l-9.6-16.7h19.3z"></svg:path></svg:g>`,
})
export class CircleFlagsLangRnIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
