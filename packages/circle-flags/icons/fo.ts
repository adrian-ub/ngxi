import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsFoIcon],svg[circle-flags-fo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsFo0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsFo0)"><svg:path fill="#eee" d="M0 0h100.2l66.1 53.5L233.7 0H512v189.3L466.3 257l45.7 65.8V512H233.7l-68-50.7l-65.5 50.7H0V322.8l51.4-68.5l-51.4-65z"></svg:path><svg:path fill="#0052b4" d="M100.2 0v189.3H0v33.4l24.6 33L0 289.5v33.4h100.2V512h33.4l30.6-26.3l36.1 26.3h33.4V322.8H512v-33.4l-24.6-33.7l24.6-33v-33.4H233.7V0h-33.4l-33.8 25.3L133.6 0z"></svg:path><svg:path fill="#d80027" d="M133.6 0v222.7H0v66.7h133.6V512h66.7V289.4H512v-66.7H200.3V0z"></svg:path></svg:g>`,
})
export class CircleFlagsFoIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
